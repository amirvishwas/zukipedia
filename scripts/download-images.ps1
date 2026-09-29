$ErrorActionPreference = "Continue"
$outDir = "public\images\fish"

$images = @{
    "clownfish" = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/800px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg"
    "great-white-shark" = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/800px-White_shark.jpg"
    "betta-fish" = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HM_Orange_M_Sarawut.jpg/800px-HM_Orange_M_Sarawut.jpg"
    "blue-tang" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Paletten-Doktorfisch_%28Paracanthurus_hepatus%29_02.jpg/800px-Paletten-Doktorfisch_%28Paracanthurus_hepatus%29_02.jpg"
    "anglerfish" = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lophius_piscatorius_MHNT.jpg/800px-Lophius_piscatorius_MHNT.jpg"
    "goldfish" = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gold_fish1.jpg/800px-Gold_fish1.jpg"
    "manta-ray" = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Manta_birostris-Thailand4.jpg/800px-Manta_birostris-Thailand4.jpg"
    "pufferfish" = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Arothron_hispidus_1.jpg/800px-Arothron_hispidus_1.jpg"
    "seahorse" = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg/600px-Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg"
    "whale-shark" = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Whale_shark_Georgia_aquarium.jpg/800px-Whale_shark_Georgia_aquarium.jpg"
}

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

foreach ($entry in $images.GetEnumerator()) {
    $name = $entry.Key
    $url = $entry.Value
    $outFile = Join-Path $outDir "$name.jpg"
    
    Write-Host "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -Headers $headers -UseBasicParsing
        $size = (Get-Item $outFile).Length
        Write-Host "  OK: $name.jpg ($size bytes)"
    } catch {
        Write-Host "  FAILED: $name - $($_.Exception.Message)"
    }
}
Write-Host "Done!"
