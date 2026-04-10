import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      {/* Contact Hero Area */}
      <div className="contact-hero">
        <div className="container text-center text-white">
          <h1 className="contact-title-main">تواصل معنا</h1>
          <p className="contact-subtitle mt-3">نحن في وسائل النمو نسعد دائماً باستقبال استفساراتك وطلباتك</p>
        </div>
      </div>

      <div className="container contact-content-container">
        <div className="contact-grid ">
          
          {/* Contact Details (Dark side) */}
          <div className="contact-info-panel">
            <h3 className="info-title">معلومات الاتصال</h3>
            <p className="info-desc">فريق المبيعات والدعم الفني متاح للرد على أي استفسار يخص مشاريعنا العقارية وخدماتنا.</p>
            
            <div className="contact-info-list">
              <div className="info-item">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </span>
                <div className="info-details">
                  <span className="info-label">رقم الهاتف</span>
                  <strong className="info-value">966500000000+</strong>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                </span>
                <div className="info-details">
                  <span className="info-label">البريد الإلكتروني</span>
                  <strong className="info-value">info@wasaelelnmoo.com</strong>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div className="info-details">
                  <span className="info-label">المقر الرئيسي</span>
                  <strong className="info-value">المملكة العربية السعودية، المدينة المنورة</strong>
                </div>
              </div>
            </div>

            <div className="working-hours mt-5">
              <h4 className="hours-title">ساعات العمل</h4>
              <p className="m-0">من الأحد إلى الخميس: 9:00 ص - 5:00 م</p>
              <p className="m-0">الجمعة والسبت: مغلق</p>
            </div>
          </div>

          {/* Contact Form (Light side) */}
          <div className="contact-form-panel">
            <h3 className="form-header">أرسل لنا رسالة</h3>
            <p className="text-muted mb-4">قم بتعبئة النموذج وسنتواصل معك في أقرب وقت لإطلاعك على كافة التفاصيل المتاحة.</p>
            
            <form className="contact-form">
              <div className="form-group mb-4">
                <label className="custom-label">الاسم الكامل</label>
                <input type="text" className="custom-input" placeholder="محمد عبدلله..." />
              </div>
              
              <div className="form-group mb-4">
                <label className="custom-label">رقم الجوال</label>
                <input type="tel" className="custom-input" placeholder="05x xxx xxxx" dir="ltr" style={{ textAlign: 'right' }} />
              </div>

              <div className="form-group mb-4">
                <label className="custom-label">موضوع الرسالة</label>
                <select className="custom-input custom-select">
                  <option>استفسار عن المشاريع السكنية</option>
                  <option>طلب إدارة أملاك</option>
                  <option>خدمات التطوير العقاري</option>
                  <option>أخرى</option>
                </select>
              </div>
              
              <div className="form-group mb-4">
                <label className="custom-label">رسالتك المباشرة</label>
                <textarea className="custom-textarea" rows="4" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>

              <button type="submit" className="custom-submit-btn w-100">
                إرسال الطلب الآن
                <svg className="ms-2" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
