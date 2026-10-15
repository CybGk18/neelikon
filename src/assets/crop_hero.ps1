Add-Type -AssemblyName System.Drawing
$srcPath = Resolve-Path "src/assets/hero-redesign.jpg"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# 1. Right side planetary wheel composition: from x=450 to 1024, y=0 to 576
$rectRight = New-Object System.Drawing.Rectangle(450, 0, 574, 576)
$cropRight = $src.Clone($rectRight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outRight = Join-Path (Resolve-Path "src/assets") "hero-planetary-art.png"
$cropRight.Save($outRight, [System.Drawing.Imaging.ImageFormat]::Png)
$cropRight.Dispose()

# 2. Fluid splash top-right: x=650 to 1024, y=0 to 300
$rectTopFluid = New-Object System.Drawing.Rectangle(650, 0, 374, 300)
$cropTopFluid = $src.Clone($rectTopFluid, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outTopFluid = Join-Path (Resolve-Path "src/assets") "hero-top-fluid.png"
$cropTopFluid.Save($outTopFluid, [System.Drawing.Imaging.ImageFormat]::Png)
$cropTopFluid.Dispose()

# 3. Bottom-right powder splash: x=620 to 1024, y=300 to 576
$rectBottomPowder = New-Object System.Drawing.Rectangle(620, 300, 404, 276)
$cropBottomPowder = $src.Clone($rectBottomPowder, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outBottomPowder = Join-Path (Resolve-Path "src/assets") "hero-bottom-powder.png"
$cropBottomPowder.Save($outBottomPowder, [System.Drawing.Imaging.ImageFormat]::Png)
$cropBottomPowder.Dispose()

$src.Dispose()
Write-Output "Successfully cropped hero planetary assets"
