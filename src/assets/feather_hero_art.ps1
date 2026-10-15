Add-Type -AssemblyName System.Drawing
$imgPath = Resolve-Path "src/assets/hero-wheel-clean.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Smoothly feather alpha on the left edge (x: 0 to 80)
$featherWidth = 80
for ($x = 0; $x -lt $featherWidth; $x++) {
    $alpha = [int](255 * ($x / $featherWidth))
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        # Apply alpha feather
        $newA = [int]($p.A * ($x / $featherWidth))
        $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($newA, $p.R, $p.G, $p.B))
    }
}

$outPath = Join-Path (Resolve-Path "src/assets") "hero-wheel-feathered.png"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Left-feathered hero wheel saved to hero-wheel-feathered.png"
