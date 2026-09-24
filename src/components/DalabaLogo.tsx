import { logoVectors } from "./assets";

export function DalabaLogo({ className }: { className?: string }) {
  return (
    <div className={className} data-name="DALABA logo">
      <div className="relative w-full aspect-[740.102/253.839] overflow-clip">
        {logoVectors.map((v) => (
          <div key={v.inset} className="absolute" style={{ inset: v.inset.replace(/_/g, " ") }}>
            <img alt="" className="block size-full" src={v.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
