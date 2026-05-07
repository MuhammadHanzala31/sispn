import Image from 'next/image'
import React from 'react'
import img from '@/public/r-form-img.png'

export default function RequestForm() {
  return (
    <section className='lg:px-[80px] md:px-[40px] px-6 my-16'>
      <div className='flex lg:flex-row flex-col rounded-2xl shadow-2xl   overflow-hidden border bg-black border-gray-100 min-h-[560px]'>

        {/* ── Left Panel ── */}
        <div className='relative lg:w-[42%] w-full bg-gradient-to-br from-[#421C47] via-[#81358A] to-[#a84db5] p-10 flex flex-col justify-between overflow-hidden'>
          {/* Decorative circles */}
          <div className='absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10' />
          <div className='absolute -bottom-10 -left-10 w-44 h-44 rounded-full border border-white/10' />

          <div className='relative z-10'>
            {/* Icon badge */}
            <div className='w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>

            <h3 className='text-white text-3xl font-bold leading-tight mb-2'>
              Let's Build Something
            </h3>
            <span className='text-white/60 text-2xl font-normal block mb-5'>
              Great Together
            </span>
            <p className='text-white/65 text-sm leading-relaxed mb-8'>
              Boost your online presence with custom web development and design tailored for your business. Your success is our success.
            </p>

            {/* Feature pills */}
            {['Custom Web Development', 'UI/UX Design', 'SEO & Growth'].map((item) => (
              <div key={item} className='flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 mb-3 w-fit'>
                <svg className='w-3.5 h-3.5 text-purple-300' fill='none' stroke='currentColor' strokeWidth={2.5} viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                </svg>
                <span className='text-white/85 text-sm'>{item}</span>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className='relative z-10 flex gap-1.5 mt-6'>
            <span className='w-5 h-2 rounded-full bg-white' />
            <span className='w-2 h-2 rounded-full bg-white/25' />
            <span className='w-2 h-2 rounded-full bg-white/25' />
          </div>
        </div>

        {/* ── Right Panel (Form) ── */}
        <div className='flex-1 bg-white p-10 flex flex-col justify-center text-start '>
          <h4 className='text-[#1a1a1a] text-2xl font-semibold mb-1'>Send Us a Message</h4>
          <p className='text-gray-400 text-sm mb-7'>We'll get back to you within 24 hours.</p>

          <div className='flex flex-col gap-4'>
            {/* Row 1 */}
            <div className='flex lg:flex-row flex-col gap-4'>
              <Field label='Full Name'>
                <input type='text' placeholder='John Doe' className={inputCls} />
              </Field>
              <Field label='Email'>
                <input type='email' placeholder='john@email.com' className={inputCls} />
              </Field>
            </div>

            {/* Row 2 */}
            <div className='flex lg:flex-row flex-col gap-4'>
              <Field label='Phone'>
                <input type='tel' placeholder='+1 (555) 000-000' className={inputCls} />
              </Field>
              <Field label='Country'>
                <input type='text' placeholder='United States' className={inputCls} />
              </Field>
            </div>

            {/* Textarea */}
            <Field label='How Can We Help?'>
              <textarea
                rows={4}
                placeholder='Describe your project or request...'
                className={`${inputCls} resize-none`}
              />
            </Field>

            {/* Checkbox */}
            <label className='flex items-start gap-2.5 cursor-pointer mt-1'>
              <input
                type='checkbox'
                className='mt-0.5 w-4 h-4 accent-[#81358A] shrink-0'
              />
              <span className='text-gray-500 text-sm leading-relaxed'>
                By submitting you agree to our{' '}
                <a href='#' className='text-[#81358A] font-medium hover:underline'>Terms & Policy</a>.
              </span>
            </label>

            {/* Submit */}
            <button className='mt-2 w-full py-3.5 rounded-xl text-white text-base font-semibold bg-gradient-to-br from-[#421C47] to-[#81358A] hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z' />
              </svg>
              Submit Request
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ── Helpers ── */
const inputCls =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#81358A] focus:ring-2 focus:ring-[#81358A]/15 transition-all duration-200'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className='flex-1 flex flex-col gap-1.5'>
      <label className='text-[14px] font-bold uppercase tracking-wider text-[#81358A]'>
        {label}
      </label>
      {children}
    </div>
  )
}