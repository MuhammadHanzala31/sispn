export default function StrategyCard({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index?: number
}) {
  return (
    <div className='group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-[#ede0f0]/70 shadow-[0_4px_20px_rgba(129,53,138,0.07)] hover:shadow-[0_12px_40px_rgba(129,53,138,0.16)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden'>
      {/* Left accent border */}
      <div className='absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#421C47] to-[#B83DC8] rounded-l-2xl' />

      {/* Number badge */}
      {index !== undefined && (
        <span className='self-start inline-flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-[#421C47] to-[#8E2391] text-white text-sm font-bold shrink-0'>
          {String(index + 1).padStart(2, '0')}
        </span>
      )}

      <h5 className='text-xl font-bold text-[#421C47] leading-snug group-hover:text-[#81358A] transition-colors duration-200'>
        {title}
      </h5>

      <p className='text-[#555] text-base leading-7'>
        {description}
      </p>
    </div>
  )
}
