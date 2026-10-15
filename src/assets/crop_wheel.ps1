Add-Type -AssemblyName System.Drawing
$srcPath = Resolve-Path "src/assets/hero-redesign.jpg"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Crop below navbar (y=55) and right side (x=410 to 1024)
$x = 410
$y = 55
$w = $src.Width - $x
$h = $src.Height - $y

$rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$crop = $src.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outPath = Join-Path (Resolve-Path "src/assets") "hero-wheel-art.png"
$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
$src.Dispose()

Write-Output "Saved hero-wheel-art.png ($w x $h)"
