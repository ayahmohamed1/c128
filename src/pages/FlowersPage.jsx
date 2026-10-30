import LoveCard from '../components/LoveCard.jsx'

export default function FlowersPage({ back, content }) {
  const f = content.flowers || {}

  return (
    <LoveCard
      icon={f.icon || '🎈'}
      title={f.title || 'Something I love about you'}
      image={f.image || '/images/flower.png'}
      message={f.message}
      onClose={back}
      returnButtonText={f.returnButton || 'RETURN'}
    />
  )
}
