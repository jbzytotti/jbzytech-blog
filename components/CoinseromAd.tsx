export default function CoinseromAd({ className = "" }: { className?: string }) {
  return (
    <div
      style={{ width: "468px", margin: "0 auto", textAlign: "center" }}
      className={className}
    >
      <iframe
        src="//ads.coinserom.com/pub?adsunit=383734&size=468x60"
        style={{ width: "468px", height: "60px", border: "0px", padding: 0, backgroundColor: "transparent", overflow: "auto" }}
      />
      <a
        style={{ display: "block", textAlign: "right", fontSize: "12px", width: "468px" }}
        href="https://coinserom.com/?affiliate=3531313138"
        target="_blank"
      >
        Ads by coinserom
      </a>
    </div>
  );
}