import styles from '../css/gallery.module.css'
import Heading from '../components/Heading'
// Sample event data
const events = [
  {
    id: 1,
    name: 'Orientation',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    id: 2,
    name: 'Society Fair',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    id: 3,
    name: 'Sports Day',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
]

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      {/* Keep the original gallery title styling */}
      <Heading text="GALLERY" />

      {/* Add the event gallery content */}
      <div className={styles.eventsContainer}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventSection}>
            <div className={styles.eventHeader}>
              <h2 className={styles.eventTitle}>{event.name}</h2>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>

            <div className={styles.eventGrid}>
              {event.images.map((image, index) => (
                <div key={index} className={styles.eventCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.imageContainer}>
                      <img
                        src={image || '/placeholder.svg'}
                        alt={`${event.name} photo ${index + 1}`}
                        className={styles.eventImage}
                      />
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <p className={styles.photoCaption}>
                      {event.name} - Photo {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
