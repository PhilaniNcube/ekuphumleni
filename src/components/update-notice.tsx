export function UpdateNotice() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 max-w-lg rounded-2xl bg-white p-8 text-center shadow-2xl">
        <div className="mb-4 flex justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-cream">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-brand-dark-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>

        <h2 className="mb-2 font-heading text-2xl text-brand-dark-green">
          We&apos;re Updating!
        </h2>
        <p className="text-brand-grey">
          Our website is currently undergoing updates to serve you better. Some
          features may be temporarily unavailable. We appreciate your patience.
        </p>
      </div>
    </div>
  );
}
