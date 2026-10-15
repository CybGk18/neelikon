Add-Type -AssemblyName System.Drawing
$srcPath = Resolve-Path "src/assets/colour-expertise.jpg"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# 1. Crop top-right pigments (x: 520 to 1024, y: 0 to 280)
$rectTop = New-Object System.Drawing.Rectangle(520, 0, 504, 280)
$cropTop = $src.Clone($rectTop, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outTop = Join-Path (Resolve-Path "src/assets") "pigment-top-cluster.png"
$cropTop.Save($outTop, [System.Drawing.Imaging.ImageFormat]::Png)
$cropTop.Dispose()

# 2. Crop bottom wave pigments (x: 320 to 1024, y: 380 to 640)
$rectBottom = New-Object System.Drawing.Rectangle(320, 380, 704, 260)
$cropBottom = $src.Clone($rectBottom, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outBottom = Join-Path (Resolve-Path "src/assets") "pigment-wave-cluster.png"
$cropBottom.Save($outBottom, [System.Drawing.Imaging.ImageFormat]::Png)
$cropBottom.Dispose()

# 4. Pure top corner pigments
$rectPureTop = New-Object System.Drawing.Rectangle(580, 0, 444, 215)
$cropPureTop = $src.Clone($rectPureTop, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outPureTop = Join-Path (Resolve-Path "src/assets") "pigment-top-pure.png"
$cropPureTop.Save($outPureTop, [System.Drawing.Imaging.ImageFormat]::Png)
$cropPureTop.Dispose()

# 5. Pure bottom wave pigment swirl
$rectPureWave = New-Object System.Drawing.Rectangle(340, 420, 280, 220)
$cropPureWave = $src.Clone($rectPureWave, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outPureWave = Join-Path (Resolve-Path "src/assets") "pigment-wave-pure.png"
$cropPureWave.Save($outPureWave, [System.Drawing.Imaging.ImageFormat]::Png)
$cropPureWave.Dispose()

$src.Dispose()
Write-Output "Successfully cropped pigment assets"
