import LoveCard from '../components/LoveCard.jsx'

export default function MemoriesPage({ back, content }) {
  const m = content.memories || {}

  return (
    <LoveCard
      icon={m.icon || '🎈'}
      title={m.title || 'Something I love about you'}
      image={m.image || '/images/card-sample.jpg'}
      message={m.message}
      onClose={back}
      returnButtonText={m.returnButton || 'RETURN'}
    />
  )
}
