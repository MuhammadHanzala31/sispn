export default function BenefitCard({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index?: number
}) {
  return (
    <div className='group relative flex flex-col gap-4 p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.14)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.22)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left'>

      {/* Left accent bar */}
      <div className='absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#421C47] to-[#B83DC8]' />

      {/* Number badge */}
      {index !== undefined && (
        <span className='self-start inline-flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-[#421C47] to-[#8E2391] text-white text-xs font-bold shrink-0'>
          {String(index + 1).padStart(2, '0')}
        </span>
      )}

      <h4 className='text-lg font-bold text-[#421C47] leading-snug group-hover:text-[#81358A] transition-colors duration-200'>
        {title}
      </h4>

      <p className='text-sm text-[#555] leading-7'>
        {description}
      </p>
    </div>
  )
}
