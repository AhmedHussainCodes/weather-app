import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const CustomModal = ({ isOpen, onClose, message }) => {
    return (
        <Modal
            show={isOpen}
            onHide={onClose}
            centered
            backdrop="static"
            contentClassName="border-0"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="position-fixed top-0 start-0 w-100 h-100"
                style={{
                    background: "linear-gradient(135deg, rgba(66,133,244,0.7) 0%, rgba(70,211,252,0.5) 100%)",
                    zIndex: -1,
                }}
            />

            <motion.div
                initial={{ y: -60, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 60, opacity: 0, scale: 0.8 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                }}
                className="modal-content p-4 rounded-4"
                style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px rgba(0, 123, 255, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    className="position-absolute"
                    style={{
                        top: "-30px",
                        right: "-30px",
                        width: "100px",
                        height: "100px",
                        background: "radial-gradient(circle, rgba(255,223,0,0.6) 0%, rgba(255,223,0,0) 70%)",
                        borderRadius: "50%",
                        zIndex: "0",
                        filter: "blur(5px)"
                    }}
                />

                <div className="position-relative" style={{ zIndex: "1" }}>
                    <Modal.Header className="border-0 pb-0">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="d-flex align-items-center w-100"
                        >
                            <motion.span
                                animate={{
                                    rotate: [0, 5, 0, -5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatDelay: 0
                                }}
                                className="me-2 fs-3"
                                style={{ color: "#0055AA" }}
                            >
                                ☁️
                            </motion.span>
                            <Modal.Title className="fw-bold" style={{ color: "#0055AA", letterSpacing: "0.5px" }}>
                                Weather Alert
                            </Modal.Title>
                            <Button
                                onClick={onClose}
                                className="ms-auto"
                                style={{
                                    background: "none",
                                    border: "none",
                                    fontSize: "1.2rem",
                                    color: "#0055AA",
                                    opacity: 0.8,
                                    transition: "all 0.2s ease",
                                }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                                onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
                            >
                                <span aria-hidden="true">×</span>
                            </Button>
                        </motion.div>
                    </Modal.Header>

                    <Modal.Body className="py-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-center position-relative"
                        >
                            <p
                                className="fs-5 fw-medium mb-0"
                                style={{
                                    color: "#2E4369",
                                    textShadow: "0 1px 1px rgba(255, 255, 255, 0.5)",
                                    lineHeight: "1.6",
                                    letterSpacing: "0.02em"
                                }}
                            >
                                {message}
                            </p>

                            <div
                                className="position-absolute"
                                style={{
                                    bottom: "-15px",
                                    left: "10%",
                                    fontSize: "12px",
                                    opacity: 0.5,
                                    color: "#0055AA"
                                }}
                            >
                                ☁
                            </div>
                            <div
                                className="position-absolute"
                                style={{
                                    top: "-20px",
                                    right: "15%",
                                    fontSize: "14px",
                                    opacity: 0.6,
                                    color: "#0055AA"
                                }}
                            >
                                ☁
                            </div>
                        </motion.div>
                    </Modal.Body>

                    <Modal.Footer className="border-0 pt-0 d-flex justify-content-center">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={onClose}
                                className="px-4 py-2 rounded-pill fw-semibold"
                                style={{
                                    background: "linear-gradient(145deg, #4B96F3, #0A7AFF)",
                                    border: "none",
                                    boxShadow: "0 4px 15px rgba(10, 122, 255, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1)",
                                    color: "white",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                Got it
                            </Button>
                        </motion.div>
                    </Modal.Footer>
                </div>

                <div
                    className="position-absolute"
                    style={{
                        bottom: "10px",
                        left: "10px",
                        width: "150px",
                        height: "20px",
                        background: "radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                        borderRadius: "50%",
                        zIndex: "0"
                    }}
                />
            </motion.div>
        </Modal>
    );
};

export default CustomModal;