import { motion } from "framer-motion";

const FadeInBox = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // 初始状态：透明 + 向下偏移
      animate={{ opacity: 1, y: 0 }}   // 动画结束状态：不透明 + 回到原位
      transition={{ duration: 0.5 }}  // 动画时长 0.5 秒
      style={{
        background: "linear-gradient(90deg, #ff6b6b, #4ecdc4)",
        padding: "20px",
        borderRadius: "8px",
        color: "white",
      }}
    >
      <h2>Hello, Framer Motion! 👋</h2>
    </motion.div>

    <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
  whileTap={{ scale: 0.95 }}
  style={{
    background: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }}
>
  Click Me!
</motion.button>
    </>
    

  );
};

export default FadeInBox;