'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answers, setAnswers] = useState({
    seekingHelpFor: '',
    primaryIssue: '',
    duration: '',
    frequency: '',
    withdrawal: '',
    previousTreatment: '',
    environment: '',
    mentalHealth: [] as string[],
    insuranceType: '',
    insuranceProvider: '',
    insuranceCardImage: null as string | null,
    insuranceReceivedHow: '',
    recoveryReadiness: 5,
    dateOfBirth: '',
    urgency: '',
    fullName: '',
    phone: '',
    email: '',
    consentToContact: false,
  });

  type StepType = {
    type: string;
    headline?: string;
    subheadline?: string;
    question?: string;
    options?: string[];
    key?: string;
    placeholder?: string;
    accept?: string;
  };

  const steps: StepType[] = [
    {
      type: 'intro',
      headline: 'Free Confidential Assessment',
      subheadline: 'A few quick questions so we can understand your situation and guide you toward the right level of care at New Beginnings.',
    },
    {
      type: 'single-choice',
      question: 'Who are you hoping to get help for?',
      options: ['Myself', 'A family member', 'A friend', 'Someone else'],
      key: 'seekingHelpFor',
    },
    {
      type: 'single-choice',
      question: 'What kind of help are you looking for today?',
      options: ['Alcohol', 'Opioids', 'Fentanyl', 'Benzodiazepines', 'Methamphetamine', 'Cocaine', 'Prescription medications', 'Mental health support', 'Dual diagnosis', 'Not sure yet'],
      key: 'primaryIssue',
    },
    {
      type: 'single-choice',
      question: 'When did you first start noticing this becoming a concern?',
      options: ['In the past thirty days', 'One to three months ago', 'Three to twelve months ago', 'Over a year ago'],
      key: 'duration',
    },
    {
      type: 'single-choice',
      question: 'How would you describe the current pattern of use?',
      options: ['Using every day', 'Using several times a week', 'Mostly weekend use', 'Occasional use', 'Not using currently'],
      key: 'frequency',
    },
    {
      type: 'single-choice',
      question: 'Have there been any withdrawal symptoms?',
      options: ['Yes', 'No', 'Not sure'],
      key: 'withdrawal',
    },
    {
      type: 'single-choice',
      question: 'Has treatment ever been attempted before?',
      options: ['Yes', 'No', 'Not sure'],
      key: 'previousTreatment',
    },
    {
      type: 'single-choice',
      question: 'Is the current home or living situation safe and stable?',
      options: ['Yes', 'No', 'Not sure'],
      key: 'environment',
    },
    {
      type: 'multi-choice',
      question: 'Are there any mental health concerns we should keep in mind?',
      options: ['Anxiety', 'Depression', 'PTSD', 'Bipolar symptoms', 'Trauma related symptoms', 'I am not sure', 'None'],
      key: 'mentalHealth',
    },
    {
      type: 'single-choice',
      question: 'What type of insurance do you have?',
      options: ['PPO', 'HMO', 'Medicaid', 'Medicare', 'No insurance', 'Not sure'],
      key: 'insuranceType',
    },
    {
      type: 'text-input',
      question: 'Who is your insurance provider?',
      key: 'insuranceProvider',
      placeholder: 'Enter your insurance provider',
    },
    {
      type: 'file-upload',
      question: 'Optional: Upload a photo of your insurance card',
      key: 'insuranceCardImage',
      accept: 'image/*',
    },
    {
      type: 'text-input',
      question: 'How do you receive your insurance?',
      key: 'insuranceReceivedHow',
      placeholder: 'e.g., Through employer, Individual plan, Government program',
    },
    {
      type: 'rating',
      question: 'How ready do you feel to start recovery?',
      key: 'recoveryReadiness',
    },
    {
      type: 'text-input',
      question: 'What is your date of birth?',
      key: 'dateOfBirth',
      placeholder: 'MM/DD/YYYY',
    },
    {
      type: 'single-choice',
      question: 'When are you hoping to get help?',
      options: ['Immediately', 'Within twenty four to forty eight hours', 'Within a week', 'Just gathering information'],
      key: 'urgency',
    },
    {
      type: 'contact-info',
      question: 'Where should we send your confidential assessment results?',
    },
    {
      type: 'final',
      headline: 'Thank you.',
      subheadline: 'Your confidential assessment has been submitted. A member of our team will reach out to you shortly.',
    },
  ];

  const handleAnswer = (key: string, value: string | boolean | number) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleMultiChoice = (key: string, value: string) => {
    setAnswers((prev) => {
      const currentArray = (prev[key as keyof typeof prev] as string[]) || [];
      const isSelected = currentArray.includes(value);
      return {
        ...prev,
        [key]: isSelected ? currentArray.filter((v) => v !== value) : [...currentArray, value],
      };
    });
  };

  const compressImage = (file: File, maxWidth: number = 800, quality: number = 0.6): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedDataUrl);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const compressedImage = await compressImage(file);
      setAnswers((prev) => ({
        ...prev,
        [key]: compressedImage,
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      const result = await response.json();
      if (result.success) {
        handleNext();
      } else {
        alert('Error submitting assessment. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Error submitting assessment. Please try again.');
      setIsSubmitting(false);
    }
  };

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-[#F7F3EA] py-16 md:py-24 flex flex-col">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        {/* Progress Bar */}
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-semibold text-[#1F2937]">
                Step {currentStep} of {steps.length - 2}
              </span>
            </div>
            <div className="w-full bg-[#E6E1D6] rounded-full h-3">
              <div
                className="bg-[#5F7A8C] h-3 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 2)) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-16 border border-[#E6E1D6]"
          >
            {step.type === 'intro' && (
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">{step.headline}</h1>
                <p className="text-xl md:text-2xl text-[#374151] mb-12 leading-relaxed">{step.subheadline}</p>
                <button
                  onClick={handleNext}
                  className="px-10 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] transition transform hover:scale-105"
                >
                  Start Assessment
                </button>
              </div>
            )}

            {step.type === 'single-choice' && step.options && step.key && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-10">{step.question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {step.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(step.key as string, option)}
                      className={`p-4 rounded-2xl border-2 font-semibold text-lg transition ${
                        (answers[step.key as keyof typeof answers] as string) === option
                          ? 'border-[#5F7A8C] bg-[#5F7A8C]/10 text-[#5F7A8C]'
                          : 'border-[#E6E1D6] bg-white text-[#1F2937] hover:border-[#5F7A8C]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!(answers[step.key as keyof typeof answers] as string)}
                  className="w-full px-8 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step.type === 'multi-choice' && step.options && step.key && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-10">{step.question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {step.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleMultiChoice(step.key as string, option)}
                      className={`p-4 rounded-2xl border-2 font-semibold text-lg transition ${
                        (answers[step.key as keyof typeof answers] as string[]).includes(option)
                          ? 'border-[#5F7A8C] bg-[#5F7A8C]/10 text-[#5F7A8C]'
                          : 'border-[#E6E1D6] bg-white text-[#1F2937] hover:border-[#5F7A8C]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="w-full px-8 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] transition flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step.type === 'text-input' && step.question && step.key && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-10">{step.question}</h2>
                <input
                  type="text"
                  placeholder={step.placeholder || ''}
                  value={(answers[step.key as keyof typeof answers] as string) || ''}
                  onChange={(e) => handleAnswer(step.key as string, e.target.value)}
                  className="w-full px-5 py-4 border-2 border-[#E6E1D6] rounded-2xl mb-10 text-lg text-[#1F2937] focus:border-[#5F7A8C] focus:outline-none placeholder:text-[#9CA3AF]"
                />
                <button
                  onClick={handleNext}
                  disabled={!(answers[step.key as keyof typeof answers] as string)}
                  className="w-full px-8 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step.type === 'file-upload' && step.question && step.key && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-10">{step.question}</h2>
                <div className="mb-10">
                  <label className="flex flex-col items-center justify-center w-full px-6 py-10 border-2 border-dashed border-[#E6E1D6] rounded-2xl cursor-pointer hover:border-[#5F7A8C] hover:bg-[#5F7A8C]/5 transition">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-12 h-12 mb-4 text-[#5F7A8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="mb-2 text-lg font-semibold text-[#1F2937]">Upload Insurance Card</p>
                      <p className="text-sm text-[#6B7280]">Click to upload or take a photo</p>
                      {(answers[step.key as keyof typeof answers]) && (
                        <p className="mt-3 text-sm font-semibold text-[#5F7A8C]">Image uploaded</p>
                      )}
                    </div>
                    <input
                      type="file"
                      accept={step.accept || 'image/*'}
                      onChange={(e) => handleFileUpload(step.key as string, e)}
                      className="hidden"
                    />
                  </label>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full px-8 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] transition flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step.type === 'rating' && step.question && step.key && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-10">{step.question}</h2>
                <div className="mb-10">
                  <div className="flex justify-between items-center gap-2">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAnswer(step.key as string, value)}
                        className={`w-full py-3 rounded-xl font-semibold text-lg transition ${
                          (answers[step.key as keyof typeof answers] as number) === value
                            ? 'bg-[#5F7A8C] text-white'
                            : 'border-2 border-[#E6E1D6] bg-white text-[#1F2937] hover:border-[#5F7A8C]'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-[#6B7280] mt-4">
                    <span>Not Ready</span>
                    <span>Completely Ready</span>
                  </div>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full px-8 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] transition flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step.type === 'contact-info' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-10">{step.question}</h2>
                <div className="space-y-4 mb-10">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={answers.fullName}
                    onChange={(e) => handleAnswer('fullName', e.target.value)}
                    className="w-full px-5 py-4 border-2 border-[#E6E1D6] rounded-2xl focus:border-[#5F7A8C] focus:outline-none text-lg text-[#1F2937] placeholder:text-[#9CA3AF]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={answers.phone}
                    onChange={(e) => handleAnswer('phone', e.target.value)}
                    className="w-full px-5 py-4 border-2 border-[#E6E1D6] rounded-2xl focus:border-[#5F7A8C] focus:outline-none text-lg text-[#1F2937] placeholder:text-[#9CA3AF]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={answers.email}
                    onChange={(e) => handleAnswer('email', e.target.value)}
                    className="w-full px-5 py-4 border-2 border-[#E6E1D6] rounded-2xl focus:border-[#5F7A8C] focus:outline-none text-lg text-[#1F2937] placeholder:text-[#9CA3AF]"
                  />
                  <label className="flex items-center gap-3 cursor-pointer p-2">
                    <input
                      type="checkbox"
                      checked={answers.consentToContact}
                      onChange={(e) => handleAnswer('consentToContact', e.target.checked)}
                      className="w-6 h-6 border-2 border-[#E6E1D6] rounded cursor-pointer accent-[#5F7A8C]"
                    />
                    <span className="text-[#374151] text-lg">I consent to receive texts and calls</span>
                  </label>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!answers.fullName || !answers.phone || !answers.email || isSubmitting}
                  className="w-full px-8 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Assessment'} <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step.type === 'final' && (
              <div className="text-center">
                <div className="w-20 h-20 bg-[#5F7A8C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#5F7A8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">{step.headline}</h1>
                <p className="text-xl md:text-2xl text-[#374151] mb-12 leading-relaxed">{step.subheadline}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+18445246612"
                    className="px-10 py-4 bg-[#5F7A8C] text-white text-lg font-semibold rounded-full hover:bg-[#516A7A] transition transform hover:scale-105"
                  >
                    Call Now
                  </a>
                  <Link
                    href="/"
                    className="px-10 py-4 border-2 border-[#5F7A8C] text-[#5F7A8C] text-lg font-semibold rounded-full hover:bg-[#5F7A8C]/5 transition"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
