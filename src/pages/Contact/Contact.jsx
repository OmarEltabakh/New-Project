import React, { useState } from 'react';
import './Contact.css';
import contactBg from '../../assets/contact-bg.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'استفسار عن المشاريع السكنية',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Saudi phone numbers start with 05 (or +9665 or 5) and have 10 digits generally, simplified here to typical input.
  const isPhoneValid = (phone) => {
    const regex = /^(?:\+9665|05|5)\d{8}$/;
    return regex.test(phone.replace(/\s/g, ''));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      isPhoneValid(formData.phone) &&
      formData.message.trim() !== ''
    );
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) return;
    
    setLoading(true);
    setStatus(null);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyCQTD9EmBtAdolD1Ntq4n2BTa77ktlSrYgb95hwARLmMQ4qc8itRQZCxziLaLUjRJh1w/exec';

    try {
      const params = new URLSearchParams();
      
      params.append('name', formData.name.trim());
      params.append('phone', formData.phone.trim());
      params.append('email', formData.email.trim());
      params.append('subject', formData.subject); 
      params.append('message', formData.message.trim()); 

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: params, 
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      setStatus('success');
      
      setFormData({ 
        name: '', 
        phone: '', 
        email: '', 
        subject: 'استفسار عن المشاريع السكنية', 
        message: '' 
      });

    } catch (error) {
      console.error("Error sending data:", error);
      setStatus('error');
    }

    setLoading(false);
  };
  return (
    <div className="contact-page-wrapper">
      {/* Contact Hero Area */}
      <div 
        className="contact-hero" 
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.85)'}}></div>
        <div className="container text-center text-white" style={{position: 'relative', zIndex: 1}}>
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
                  <strong className="info-value" dir="ltr">+966 54 223 1128</strong>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                </span>
                <div className="info-details">
                  <span className="info-label">البريد الإلكتروني</span>
                  <a href="mailto:info@wasaelelnmoo.com" className="info-value text-white text-decoration-none" style={{textDecoration: 'none'}}>info@wasaelelnmoo.com</a>
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
            
            {status === 'success' && (
              <div className="alert alert-success mb-4" role="alert" style={{backgroundColor: '#e6f4ea', color: '#137333', padding: '15px', borderRadius: '8px', border: '1px solid #ceead6'}}>
                شكراً لتواصلك معنا! تم استلام رسالتك وسنقوم بالرد عليك في أقرب وقت.
              </div>
            )}

            {status === 'error' && (
              <div className="alert alert-danger mb-4" role="alert" style={{backgroundColor: '#fce8e6', color: '#c5221f', padding: '15px', borderRadius: '8px', border: '1px solid #fad2cf'}}>
                عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="custom-label">الاسم الكامل <span className="text-danger">*</span></label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="custom-input" placeholder="محمد عبدلله..." />
              </div>
              
              <div className="form-group mb-4">
                <label className="custom-label">رقم الجوال <span className="text-danger">*</span> {formData.phone && !isPhoneValid(formData.phone) && <span style={{color: 'red', fontSize: '12px', fontWeight: 'normal'}}>(رقم سعودي غير صحيح)</span>}</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="custom-input" placeholder="05xxxxxxxx" dir="ltr" style={{ textAlign: 'right', borderColor: formData.phone && !isPhoneValid(formData.phone) ? 'red' : '' }} />
              </div>

              <div className="form-group mb-4">
                <label className="custom-label">البريد الإلكتروني (اختياري)</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" className="custom-input" placeholder="example@email.com" dir="ltr" style={{ textAlign: 'right' }} />
              </div>

              <div className="form-group mb-4">
                <label className="custom-label">موضوع الرسالة <span className="text-danger">*</span></label>
                <select required name="subject" value={formData.subject} onChange={handleChange} className="custom-input custom-select">
                  <option>استفسار عن المشاريع السكنية</option>
                  <option>طلب إدارة أملاك</option>
                  <option>خدمات التطوير العقاري</option>
                  <option>أخرى</option>
                </select>
              </div>
              
              <div className="form-group mb-4">
                <label className="custom-label">رسالتك المباشرة <span className="text-danger">*</span></label>
                <textarea required name="message" value={formData.message} onChange={handleChange} className="custom-textarea" rows="4" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>

              <button 
                type="submit" 
                className="custom-submit-btn w-100"
                disabled={!isFormValid() || loading}
                style={{ opacity: (!isFormValid() || loading) ? 0.6 : 1, cursor: (!isFormValid() || loading) ? 'not-allowed' : 'pointer'}}
              >
                {loading ? 'جاري الإرسال...' : 'إرسال الطلب الآن'}
                {!loading && <svg className="ms-2" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
