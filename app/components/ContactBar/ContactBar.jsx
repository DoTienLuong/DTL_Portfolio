import React from "react";
import styles from "./ContactBar.module.css";
import Image from "next/image";
import { contactList } from "./assetsContactBar";
import { motion } from "motion/react";

const ContactBar = () => {
    return (
        <motion.div className={styles.floatingContactBar}>
            {contactList.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.href}
                    className={`${styles.contactButton} ${styles[link.type + "Btn"] || ""} ${
                        link.customClass || ""
                    }`}
                    title={link.title}
                    target={
                        link.image || link.type === "maps" || link.type === "messenger"
                            ? "_blank"
                            : undefined
                    }
                    rel={
                        link.image || link.type === "maps" || link.type === "messenger"
                            ? "noopener noreferrer"
                            : undefined
                    }
                    whileHover={{ 
                        scale: 1.1, 
                        y: -10 // Kết hợp cả hiệu ứng phóng to và di chuyển lên cao hơn một chút
                    }}
                >
                    {link.iconClass && <i className={`${link.iconClass}`}></i>}
                    {link.image && (
                        <Image
                            src={link.image}
                            alt="Image Icon"
                            className={`${styles.zaloImage}`} // Thêm class riêng để style
                        />
                    )}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default ContactBar;
