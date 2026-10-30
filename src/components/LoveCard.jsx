import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './LoveCard.module.css'

export default function LoveCard({
  icon = '🎈',
  title = 'Something I love about you',
  image = '',
  imageAlt = 'Card illustration',
  message = '',
  onClose,
  showReturnButton = true,
  returnButtonText = 'RETURN',
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className={styles.cardWrapper}>
      <motion.div
        className={styles.cardContainer}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top bar: Balloon/Icon & Close Button (X) */}
        <div className={styles.topBar}>
          <motion.div
            className={styles.iconWrap}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {typeof icon === 'string' && icon.startsWith('/') ? (
              <img src={icon} alt="icon" className={styles.iconImg} />
            ) : (
              <span>{icon}</span>
            )}
          </motion.div>

          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
            title="Return to menu"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <h2 className={styles.title} dir="auto">
          {title}
        </h2>

        {/* Single Image */}
        <div className={styles.imageWrapper}>
          {imgError || !image ? (
            <div className={styles.placeholderFallback}>
              <span style={{ fontSize: '2.4rem' }}>🌸</span>
              <p>Image from /public</p>
            </div>
          ) : (
            <img
              src={image}
              alt={imageAlt || title}
              className={styles.cardImage}
              onError={() => setImgError(true)}
              loading="eager"
            />
          )}
        </div>

        {/* Message */}
        {message && (
          <div className={styles.message} dir="auto">
            {message}
          </div>
        )}

        {/* Bottom Return Button */}
        {showReturnButton && (
          <div className={styles.bottomAction}>
            <button className="btn-return" onClick={onClose}>
              {returnButtonText}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
