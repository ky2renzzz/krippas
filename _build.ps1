$path = 'C:\Users\asus\Desktop\krippas\dario_46_expanded.js'

$content = @'
// KRIPPAS - Dario Amodei Narrative Tree
// REDESIGNED: 2026-07-31 | 46 nodes | NON-LINEAR SEMANTIC GRAPH | autoRoute on every node
// Themes not layers. Order is not fixed. ~18-22 nodes visited per playthrough.
//
// REALITY July 2026: Anthropic private ~$965B. Claude Opus 5 shipped. Pentagon summons.
// Daniela co-founder. Constitutional AI. Claude Science pharma. AWS/Google dual-cloud.
// 400 employees letter. Dario = conscience of AI.
// INITIAL: capital:68 hype:52 compute:58 safety:65 | family:65 board:58 rival:55 regulator:60 partner:62 public:48 staff:68

const dario = {
  start: "d01_subpoena",
  nodes: {
'@

Set-Content -Path $path -Value $content -Encoding UTF8
Write-Host "Part 1 done"
