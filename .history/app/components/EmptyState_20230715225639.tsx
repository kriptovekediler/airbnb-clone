interface EmptyStateProps {
  title?:string
  subtitle?: string
  showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title= 'No exact matches',
  subtitle = 'Try changing or removing some of your filters'
}) => {
  return (
    <div>Empty</div>
  )
}

export default EmptyState