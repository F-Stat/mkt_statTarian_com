import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router'
import {
  demoRequestSchema,
  type DemoRequestFormData,
} from '@/lib/schemas/demo-request.schema'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { Textarea } from '../../ui/textarea'
import { Checkbox } from '../../ui/checkbox'
import { Link } from 'react-router'
import { Loader2 } from 'lucide-react'

export function DemoRequestForm() {
  const [searchParams] = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DemoRequestFormData>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      consent: false,
    },
  })

  // Pre-fill plan from query params
  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam && ['starter', 'pro', 'enterprise', 'unsure'].includes(planParam)) {
      setValue('plan', planParam as any)
    }
  }, [searchParams, setValue])

  const onSubmit = async (data: DemoRequestFormData) => {
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Demo request submitted:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Request Received
        </h3>
        <p className="text-muted-foreground">
          Thank you for your interest in StatTarian. We'll be in touch within one working day to
          schedule your demo.
        </p>
      </div>
    )
  }

  // Shared premium input class
  const inputClass =
    "w-full rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">
            First name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            {...register('firstName')}
            className={inputClass}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">
            Last name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            {...register('lastName')}
            className={inputClass}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className={inputClass}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Organisation */}
      <div className="space-y-2">
        <Label htmlFor="organisation">
          Organisation / Academy name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="organisation"
          {...register('organisation')}
          className={inputClass}
          aria-invalid={!!errors.organisation}
        />
        {errors.organisation && (
          <p className="text-sm text-destructive">{errors.organisation.message}</p>
        )}
      </div>

      {/* Role */}
      <div className="space-y-2">
        <Label htmlFor="role">
          Your role <span className="text-destructive">*</span>
        </Label>
        <Select onValueChange={(value) => setValue('role', value as any)}>
          <SelectTrigger
            id="role"
            className="
              rounded-lg border border-white/20 bg-white/10 text-white px-4 py-3
              focus:ring-2 focus:ring-brand-500 focus:border-brand-500
            "
          >
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="academy_director">Academy Director</SelectItem>
            <SelectItem value="operations_lead">Operations Lead</SelectItem>
            <SelectItem value="head_coach">Head Coach</SelectItem>
            <SelectItem value="coach">Coach</SelectItem>
            <SelectItem value="medical">Medical Staff</SelectItem>
            <SelectItem value="safeguarding">Safeguarding Lead</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.role && <p className="text-sm text-destructive">{errors.role.message}</p>}
      </div>

      {/* Plan */}
      <div className="space-y-2">
        <Label htmlFor="plan">Plan of interest</Label>
        <Select
          onValueChange={(value) => setValue('plan', value as any)}
          defaultValue={watch('plan')}
        >
          <SelectTrigger
            id="plan"
            className="
              rounded-lg border border-white/20 bg-white/10 text-white px-4 py-3
              focus:ring-2 focus:ring-brand-500 focus:border-brand-500
            "
          >
            <SelectValue placeholder="Select a plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="starter">Academy Starter</SelectItem>
            <SelectItem value="pro">Academy Pro</SelectItem>
            <SelectItem value="enterprise">Multi-Academy/Enterprise</SelectItem>
            <SelectItem value="unsure">Not sure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Source */}
      <div className="space-y-2">
        <Label htmlFor="source">How did you hear about us?</Label>
        <Select onValueChange={(value) => setValue('source', value as any)}>
          <SelectTrigger
            id="source"
            className="
              rounded-lg border border-white/20 bg-white/10 text-white px-4 py-3
              focus:ring-2 focus:ring-brand-500 focus:border-brand-500
            "
          >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="faw">FAW / Coaching Wales</SelectItem>
            <SelectItem value="word_of_mouth">Word of mouth</SelectItem>
            <SelectItem value="social">Social media</SelectItem>
            <SelectItem value="search">Search engine</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message / additional context</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={4}
          maxLength={500}
          placeholder="Tell us about your academy's needs..."
          className="
            w-full rounded-lg border border-white/20 bg-white/10 text-white
            placeholder-white/50 px-4 py-3 focus:ring-2 focus:ring-brand-500
            focus:border-brand-500 transition
          "
        />
        <p className="text-xs text-muted-foreground">
          {watch('message')?.length || 0} / 500 characters
        </p>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={watch('consent')}
          onCheckedChange={(checked) => setValue('consent', checked as boolean)}
          className="
            h-5 w-5 rounded border border-white/40 bg-white/10
            data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600
            focus:ring-2 focus:ring-brand-500 transition
          "
        />
        <Label htmlFor="consent" className="text-sm leading-tight cursor-pointer text-white">
          I agree to StatTarian processing my data to respond to this enquiry.{' '}
          <Link
            to="/legal/privacy"
            className="text-brand-300 underline hover:text-brand-200 transition-colors"
          >
            View our Privacy Policy
          </Link>
          . <span className="text-destructive">*</span>
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Request a Demo'
        )}
      </Button>
    </form>
  )
}
