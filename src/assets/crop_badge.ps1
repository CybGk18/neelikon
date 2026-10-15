Add-Type -AssemblyName System.Drawing
$srcPath = Resolve-Path "src/assets/one-world-sample.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Find bounding box of the blue badge
$minX = $src.Width
$maxX = 0
$minY = $src.Height
$maxY = 0

for ($y = 0; $y -lt 240; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        $p = $src.GetPixel($x, $y)
        # Blue badge color detection
        if ($p.B -gt 150 -and $p.B -gt $p.R * 1.4) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Add a little padding for the (R) mark
$pad = 12
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($src.Width - $cropX, ($maxX - $minX) + $pad * 2 + 10)
$cropH = [Math]::Min($src.Height - $cropY, ($maxY - $minY) + $pad * 2)

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $src.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Make pure white/near-white background transparent
for ($y = 0; $y -lt $cropped.Height; $y++) {
    for ($x = 0; $x -lt $cropped.Width; $x++) {
        $p = $cropped.GetPixel($x, $y)
        if ($p.R -gt 245 -and $p.G -gt 245 -and $p.B -gt 245) {
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        }
    }
}

$outPath = Join-Path (Resolve-Path "src/assets") "one-world-emblem.png"
$cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$src.Dispose()
Write-Output "Saved emblem: $cropW x $cropH at $outPath"
