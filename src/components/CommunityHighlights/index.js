import React, { useState, useEffect } from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

// Product name tags - matching actual Discourse tags
const PRODUCT_TAGS = [
  '1secure', 'change-tracker', 'endpoint-protector', 'groupid', 'password-policy-enforcer',
  'pingcastle', 'privilege-secure', 'strongpoint', 'threat-prevention', 'auditor',
  'data-classification', 'enterprise-auditor', 'password-management', 'password-secure',
  'policypak', 'recovery-active-directory', 'threat-manager', 'usercube',
  'activity-monitor', 'access-analyzer', 'platform-governance-salesforce', 'usercube-onprem',
  'identity-manager', 'directory-manager', 'platform-governance-netsuite', 'access-information-center'
]

// Helper function to format product tag display
const formatProductTag = (tag) => {
  return tag.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
}

// Helper function to truncate text
const truncateText = (text, maxLength = 120) => {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

function FeaturedDiscussion({ topic }) {
  if (!topic) return null

  const productTag = topic.tags ? 
    topic.tags.find(tag => PRODUCT_TAGS.includes(tag.toLowerCase())) : null
  
  return (
    <div className={styles.featuredCard}>
      <div className={styles.featuredHeader}>
        <span className={styles.featuredLabel}>🔥 Trending Discussion</span>
        {productTag && (
          <span className={styles.featuredProductTag}>
            {formatProductTag(productTag)}
          </span>
        )}
      </div>
      <Link to={`https://community.netwrix.com/t/${topic.slug}/${topic.id}`} className={styles.featuredLink}>
        <h3 className={styles.featuredTitle}>{topic.title}</h3>
        <p className={styles.featuredExcerpt}>
          {truncateText(topic.excerpt)}
        </p>
        <div className={styles.featuredStats}>
          <span>💬 {topic.posts_count} replies</span>
          <span>👀 {topic.views} views</span>
          <span>❤️ {topic.like_count} likes</span>
        </div>
      </Link>
    </div>
  )
}

function SmallCommunityCard({ topic, label, icon }) {
  if (!topic) return null

  const productTag = topic.tags ? 
    topic.tags.find(tag => PRODUCT_TAGS.includes(tag.toLowerCase())) : null

  return (
    <div className={styles.smallCard}>
      <div className={styles.smallHeader}>
        <span className={styles.smallIcon}>{icon}</span>
        <span className={styles.smallLabel}>{label}</span>
      </div>
      <Link to={`https://community.netwrix.com/t/${topic.slug}/${topic.id}`} className={styles.smallLink}>
        <h4 className={styles.smallTitle}>{topic.title}</h4>
        {productTag && (
          <span className={styles.smallProductTag}>
            {formatProductTag(productTag)}
          </span>
        )}
        <p className={styles.smallExcerpt}>
          {truncateText(topic.excerpt, 80)}
        </p>
        <div className={styles.smallStats}>
          <span>💬 {topic.posts_count}</span>
          <span>👀 {topic.views}</span>
        </div>
      </Link>
    </div>
  )
}

function CommunityHighlights() {
  const [featuredTopic, setFeaturedTopic] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCommunityHighlights() {
      try {
        // Fetch latest topics for featured discussion
        const latestResponse = await fetch('https://community.netwrix.com/latest.json')
        const latestData = await latestResponse.json()

        // Featured Discussion (most liked recent topic)
        if (latestData?.topic_list?.topics) {
          const featuredCandidate = latestData.topic_list.topics
            .filter(t => t.like_count > 5) // Only topics with good engagement
            .sort((a, b) => b.like_count - a.like_count)[0] || latestData.topic_list.topics[0]
          setFeaturedTopic(featuredCandidate)
        }

      } catch (error) {
        console.error('Failed to fetch community highlights:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCommunityHighlights()
  }, [])

  if (loading) {
    return (
      <section className={styles.communityHighlights}>
        <div className="container">
          <div className={styles.loadingState}>
            <h2>Loading community highlights...</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.communityHighlights} id="community">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Need More Help? Join Our Community</h2>
          <p className={styles.sectionSubtitle}>
            Beyond our documentation, get real-world insights and solutions from security professionals
          </p>
        </div>

        <div className={styles.highlightsGrid}>
          <FeaturedDiscussion topic={featuredTopic} />
        </div>

        <div className={styles.communityAction}>
          <Link 
            to="https://community.netwrix.com" 
            className="button button--primary button--lg"
          >
            🚀 Join the Conversation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CommunityHighlights