import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  maxSteps: number
  currentStep?: number
}

export function MultiStep({ maxSteps, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {maxSteps}
      </Label>

      <Steps css={{ '--steps-size': maxSteps }}>
        {Array.from({ length: maxSteps }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
