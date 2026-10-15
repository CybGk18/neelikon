Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path "src/assets/colour-expertise.jpg"))
$c1 = $bmp.GetPixel(50, 50)
$c2 = $bmp.GetPixel(100, 300)
$c3 = $bmp.GetPixel(500, 600)
$bmp.Dispose()
Write-Output "(50,50): $($c1.R),$($c1.G),$($c1.B) -> #$($c1.R.ToString('X2'))$($c1.G.ToString('X2'))$($c1.B.ToString('X2'))"
Write-Output "(100,300): $($c2.R),$($c2.G),$($c2.B) -> #$($c2.R.ToString('X2'))$($c2.G.ToString('X2'))$($c2.B.ToString('X2'))"
Write-Output "(500,600): $($c3.R),$($c3.G),$($c3.B) -> #$($c3.R.ToString('X2'))$($c3.G.ToString('X2'))$($c3.B.ToString('X2'))"
