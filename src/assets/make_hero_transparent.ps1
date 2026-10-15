Add-Type -AssemblyName System.Drawing
$imgPath = Resolve-Path "src/assets/hero.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$transparentBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        # Check if white/near-white background
        if ($p.R -gt 250 -and $p.G -gt 250 -and $p.B -gt 250) {
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } elseif ($p.R -gt 240 -and $p.G -gt 240 -and $p.B -gt 240) {
            # Smooth feather for near-white anti-aliased edge
            $diff = [Math]::Max(0, [Math]::Min(255, (255 - [int](($p.R + $p.G + $p.B) / 3)) * 16))
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($diff, $p.R, $p.G, $p.B))
        } else {
            $transparentBmp.SetPixel($x, $y, $p)
        }
    }
}

$outPath = Join-Path (Resolve-Path "src/assets") "hero-transparent.png"
$transparentBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$transparentBmp.Dispose()
$bmp.Dispose()

Write-Output "Saved transparent hero to $outPath"
