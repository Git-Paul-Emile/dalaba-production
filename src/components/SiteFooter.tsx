export function SiteFooter() {
  return (
    <footer className="w-full bg-[#161616]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-2 px-6 py-10 text-center sm:flex-row sm:gap-[39px]">
        <p className="text-[16px] uppercase text-[#6d6d6d]" style={{ fontWeight: 700 }}>
          © Copyright Dprods 2025, All Rights Reserved
        </p>
        <p className="text-[16px] text-[#6d6d6d]" style={{ fontWeight: 500 }}>
          Designed by <span style={{ fontWeight: 700 }}>Eroïste</span>
        </p>
      </div>
    </footer>
  );
}
