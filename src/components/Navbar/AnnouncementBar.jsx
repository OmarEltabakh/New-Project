import { useTranslation } from 'react-i18next';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const announcements = [
    {
      text: t('announcements.owners_assoc'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M3 10h18M5 10V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
        </svg>
      )
    },
    {
      text: t('announcements.fast_transfer'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      text: t('announcements.selected_projs'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      text: t('announcements.guarantees'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="announcement-bar-wrapper" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="announcement-ticker">
        <div className="ticker-content">
          {/* Mapping 20 times to ensure the loop covers the screen width */}
          {[...Array(20)].flatMap(() => announcements).map((item, index) => (
            <div key={index} className="ticker-item">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;