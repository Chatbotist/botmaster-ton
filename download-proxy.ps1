# PowerShell script to download TON Reverse Proxy
$url = "https://github.com/ton-utils/reverse-proxy/releases/latest/download/tonutils-reverse-proxy-windows-amd64.exe"
$output = "tonutils-reverse-proxy-windows-amd64.exe"

try {
    Write-Host "Downloading TON Reverse Proxy..."
    Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing
    Write-Host "Download completed successfully!"
    
    # Check file size
    $fileInfo = Get-Item $output
    Write-Host "File size: $($fileInfo.Length) bytes"
    
    if ($fileInfo.Length -lt 1000) {
        Write-Host "Warning: File size seems too small. Download might have failed."
    } else {
        Write-Host "File downloaded successfully!"
    }
} catch {
    Write-Host "Error downloading file: $($_.Exception.Message)"
}
