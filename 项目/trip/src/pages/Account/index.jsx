import useTitle from '@/hooks/useTitle.js'
import {
    useState
} from 'react'
import {
    Image,
    Cell,
    CellGroup,
    ActionSheet,
    Popup,
    Loading,
} from 'react-vant'
import {
    ServiceO,
    FriendsO,
    StarO,
    SettingO,
    UserCircleO
} from '@react-vant/icons'
import styles from './account.module.css'
import {
    generateAvatar
} from '@/llm'

const Acount = () => {
    const [userInfo, setUserInfo] = useState({
        nickname: '陶喆',
        level: '5级',
        slogan: '九四爱你',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.L5yVBJuY7iFxow-4NkPKDgHaHa?w=183&h=184&c=7&r=0&o=5&cb=thvnextc1&dpr=1.3&pid=1.7',
    })
    useTitle('我的')
    const [showActionSheet, setShowActionSheet] = useState(false)
    const handleAction = async (e) => {
        if (e.type === 1) {
            // AI生成头像
            const text = `
                昵称：${userInfo.nickname}
                签名：${userInfo.slogan}
            `;

            const newAvatar = await generateAvatar(text)
        } else if (e.type === 2) {

        }
    }
    const actions = [
        {
            name: 'AI生成头像',
            color: '#ee0a24',
            type: 1

        },
        {
            name: '上传头像',
            color: '#ee0a24',
            type: 2
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    width='64px'
                    height='64px'
                    src={userInfo.avatar}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowActionSheet(true)}
                />
                <div className='ml1'>
                    <div className={styles.nickname}>昵称：{userInfo.nickname}</div>
                    <div className={styles.level}>等级：{userInfo.level}</div>
                    <div className={styles.slogan}>签名：{userInfo.slogan}</div>
                </div>
            </div>
            <div className='mt3'>
                <CellGroup>
                    <Cell title='服务' icon={<ServiceO />} isLink />
                    <Cell title="收藏" icon={<StarO />} isLink />
                    <Cell title="朋友圈" icon={<FriendsO />} isLink />
                    <Cell title="设置" icon={<SettingO />} isLink />
                </CellGroup>
            </div>
            <ActionSheet
                visible={showActionSheet}
                actions={actions}
                cancelText="取消"
                onCancel={() => setShowActionSheet(false)}
                onSelect={(e) => handleAction(e)}
            >
            </ActionSheet>
        </div>
    )
}
export default Acount;