$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..
$root = (Get-Location).Path

function Copy-RenamedTree {
  param([string]$SrcRel, [string]$DstRel, [string]$OldName, [string]$NewName, [hashtable]$Replacements)
  $src = Join-Path $root $SrcRel
  $dst = Join-Path $root $DstRel
  if (Test-Path $dst) { Remove-Item -Recurse -Force $dst }
  Copy-Item -Recurse $src $dst
  Get-ChildItem $dst -Recurse -File | ForEach-Object {
    if ($_.Name.Contains($OldName)) {
      $n = $_.Name.Replace($OldName, $NewName)
      Rename-Item -LiteralPath $_.FullName -NewName $n
    }
  }
  Get-ChildItem $dst -Recurse -File | ForEach-Object {
    $c = [IO.File]::ReadAllText($_.FullName)
    foreach ($key in $Replacements.Keys) {
      $c = $c.Replace($key, $Replacements[$key])
    }
    [IO.File]::WriteAllText($_.FullName, $c)
  }
}

$common = @{
  "FitnessAppDevelopment" = "AuctionAppDevelopment"
  "FITNESS_APP_DEVELOPMENT" = "AUCTION_APP_DEVELOPMENT"
  "fitness-app-development" = "auction-app"
  "fitness-technology" = "our-portfolio/ecommerce"
  "fitnessFreeSetup" = "auctionFreeSetup"
  "fitnessPlatform" = "auctionPlatform"
  "fitnessOperations" = "auctionOperations"
  "fitnessFulfillment" = "auctionFulfillment"
  "fitnessIntegrations" = "auctionIntegrations"
  "fitnessOutcomes" = "auctionOutcomes"
  "fitnessMarketing" = "auctionMarketing"
  "fitnessTestimonial" = "auctionTestimonial"
  "fitnessTechnologySuite" = "auctionTechnologySuite"
  "fitness-features" = "auction-app-features"
  "fitness-tech" = "auction-tech"
}

Copy-RenamedTree "components\FitnessAppDevelopment" "components\AuctionAppDevelopment" "FitnessAppDevelopment" "AuctionAppDevelopment" $common

$bannerRep = @{
  "FitnessBanner" = "AuctionBanner"
  "fitness-technology" = "our-portfolio/ecommerce"
  "fitness-hero" = "auction-hero"
  "/fitness-app-development" = "/auction-app"
}
Copy-RenamedTree "components\FitnessBanner" "components\AuctionBanner" "FitnessBanner" "AuctionBanner" $bannerRep

$featRep = @{
  "FitnessFeaturesSection" = "AuctionFeaturesSection"
  "fitness-features" = "auction-app-features"
  "fitness-technology" = "our-portfolio/ecommerce"
}
Copy-RenamedTree "components\FitnessFeaturesSection" "components\AuctionFeaturesSection" "FitnessFeaturesSection" "AuctionFeaturesSection" $featRep

$techRep = @{
  "FitnessTechnologySuiteSection" = "AuctionTechnologySuiteSection"
  "fitness-technology" = "our-portfolio/ecommerce"
  "fitness-technology-suite-heading" = "auction-technology-suite-heading"
  "fitnessTechnologySuite" = "auctionTechnologySuite"
}
Copy-RenamedTree "components\FitnessTechnologySuiteSection" "components\AuctionTechnologySuiteSection" "FitnessTechnologySuiteSection" "AuctionTechnologySuiteSection" $techRep

Write-Host "Auction component trees cloned from fitness."
