Add-Type -AssemblyName System.Drawing
$imgPath = Resolve-Path "src/assets/hero-wheel-art.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Sample background color near "ry." (around x=75, y=240)
$bg1 = $bmp.GetPixel(75, 240)

# Fill patch around "ry." (x: 0 to 70, y: 220 to 270) with smooth gradient/color
$brush1 = New-Object System.Drawing.SolidBrush($bg1)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.FillRectangle($brush1, 0, 220, 70, 50)

# Fill patch around "Trusted Worldwide" (x: 0 to 80, y: 410 to 470)
# Here the background is a soft silk wave (#EBE3D7 to #F5EFE6)
$bg2 = $bmp.GetPixel(85, 430)
$brush2 = New-Object System.Drawing.SolidBrush($bg2)
$g.FillRectangle($brush2, 0, 410, 80, 60)

$g.Dispose()
$brush1.Dispose()
$brush2.Dispose()

$outPath = Join-Path (Resolve-Path "src/assets") "hero-wheel-clean.png"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Cleaned hero wheel art saved to hero-wheel-clean.png"
