import LoveCard from '../components/LoveCard.jsx'

export default function SongPage({ back, content }) {
  const s = content.song || {}

  return (
    <LoveCard
      icon={s.icon || '🎈'}
      title={s.title || 'Something I love about you'}
      image={s.image || '/images/card-sample.jpg'}
      message={s.message}
      onClose={back}
      returnButtonText={s.returnButton || 'RETURN'}
    />
  )
}
