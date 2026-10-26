import { useRef } from 'react';
import { chatboxContent } from '@contents/settings/chatbox.json';
import styles from '@styles/chatbot.module.css';

export default function ChatbotOverlay() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const openChat = () => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  };

  const closeChat = () => dialogRef.current?.close();

  return (
    <>
      <button
        ref={triggerRef}
        className={`${styles.trigger} quick-link`}
        type="button"
        aria-label="Ask Prometheus AI"
        aria-haspopup="dialog"
        aria-controls="prometheus-chat"
        title="Ask Prometheus AI"
        onClick={openChat}
      >
        <img src="/assets/svg/Robot.svg" alt="Ask Prometheus AI"/>
      </button>
      <dialog
        ref={dialogRef}
        id="prometheus-chat"
        className={styles.dialog}
        aria-labelledby="prometheus-chat-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeChat();
        }}
        onClose={() => triggerRef.current?.focus()}
      >
        <section className={styles.panel}>
          <button className={styles.close} type="button" onClick={closeChat} aria-label="Close chat">
              <img src="/assets/svg/Close.svg" alt="" width={24} height={24} />
          </button>
          <div className={styles.heading}>
            <img src="/assets/svg/Robot.svg" alt="" />
            <h2 id="prometheus-chat-title">{chatboxContent.title}</h2>
          </div>
          <p className={styles.notice}>
            {chatboxContent.disclaimer}
          </p>
        </section>
      </dialog>
    </>
  );
}
