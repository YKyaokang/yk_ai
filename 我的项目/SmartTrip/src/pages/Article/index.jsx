import { useParams, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useArticlesStore } from '@/store/useArticlesStore';
import { ArrowLeft } from '@react-vant/icons';
import { Button } from 'react-vant';
import { LikeO, CommentO, LocationO } from '@react-vant/icons';
import styles from './article.module.css'
import useTitle from '@/hooks/useTitle'
const Article = () => {
    useTitle("文章")
    const { id } = useParams();
    const navigate = useNavigate();
    const { articles, loading } = useArticlesStore()
    const [isVisable, setIsVisable] = useState(false)
    const article = articles.find(item => item.id === id)
    
    useEffect(() => {
        console.log('当前文章:', article);
    }, [article])

    const handleBack = () => {
        navigate(-1);
    }

    const handleFollow = () => {
        // TODO: 实现关注功能
        console.log('关注/取消关注');
        setIsVisable(true)
        setTimeout(() => {
            setIsVisable(false)
        }, 1000)
    }

    if (!article) {
        return (
            <div className={styles.notFound}>
                <p>文章未找到</p>
                <Button onClick={handleBack}>返回</Button>
            </div>
        );
    }
    
    return (
        <div className={styles.articleContainer}>
            {/* 固定顶部导航 */}
            <div className={styles.articleHeader}>
                <div className={styles.headerLeft} onClick={handleBack}>
                    <ArrowLeft size={30} />
                </div>
                <div className={styles.headerCenter}>
                    <img 
                        src={article.avatar} 
                        alt={article.nickname}
                        className={styles.headerAvatar}
                    />
                    <span className={styles.nickname}>{article.nickname}</span>
                </div>
                <div className={styles.headerRight}>
                    <Button 
                        size="small" 
                        type={article.isFocus ? 'default' : 'primary'}
                        onClick={handleFollow}
                        className={styles.followBtn}
                    >
                        {article.isFocus ? '已关注' : '关注'}
                    </Button>
                </div>
            </div>

            {/* 滚动内容区域 */}
            <div className={styles.scrollContent}>
                {/* 文章图片 */}
                <div className={styles.picture}>
                    <img 
                        src={article.image} 
                        alt={article.description}
                        className={styles.articleImage}
                    />
                </div>

                {/* 文章描述 */}
                <div className={styles.description}>
                    <h2>{article.description}</h2>
                    {article.location && (
                        <p className={styles.location}><LocationO  /> {article.location}</p>
                    )}
                    <div className={styles.stats}>
                        <span className={styles.likes}><LikeO size={20} /> {article.like}</span>
                        <span className={styles.commentCount}><CommentO size={20} /> {article.comments?.length || 0}</span>
                    </div>
                </div>

                {/* 评论区域 */}
                <div className={styles.comments}>
                    <h3 className={styles.commentsTitle}>评论 ({article.comments?.length || 0})</h3>
                    
                    {article.comments && article.comments.length > 0 ? (
                        article.comments.map((item) => (
                            <div className={styles.commentItem} key={item.id}>
                                <div className={styles.commentHeader}>
                                    <img 
                                        src={item.user_avatar} 
                                        alt={item.user_nickname}
                                        className={styles.userAvatar}
                                    />
                                    <div className={styles.commentInfo}>
                                        <div className={styles.userNickname}>
                                            {item.user_nickname}
                                        </div>
                                        <div className={styles.commentContent}>
                                            {item.user_context}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.commentActions}>
                                    <span className={styles.commentLikes}>
                                        <LikeO size={20} /> {item.users_like}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noComments}>
                            <p>暂无评论</p>
                            <p>快来说说你的看法吧~</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.toast} style={{display: isVisable ? 'block' : 'none'}}>
                关注成功
            </div>
        </div>
        
    );
};

export default Article;