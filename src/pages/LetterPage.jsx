import LoveCard from '../components/LoveCard.jsx'

export default function LetterPage({ back, content }) {
  const l = content.letter || {}

  return (
    <LoveCard
      icon={l.icon || '🎈'}
      title={l.title || 'Something I love about you'}
      image={l.image || '/images/card-sample.jpg'}
      message={l.message}
      onClose={back}
      returnButtonText={l.returnButton || 'RETURN'}
    />
  )
}
