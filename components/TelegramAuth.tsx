'use client'import { useRouter } from'next/navigation'exportdefaultfunctionTelegramAuth() {
    const router = useRouter()

    // لا حاجة لـ useEffect و useState بعد الآن// const [isAuthenticated, setIsAuthenticated] = useState(false)// إزالة الدالة checkAuth// const checkAuth = async () => {//     const response = await fetch('/api/session')//     if (response.ok) {//         setIsAuthenticated(true)//     }// }// إزالة الدالة authenticateUser// const authenticateUser = async () => {//     const WebApp = (await import('@twa-dev/sdk')).default//     WebApp.ready()//     const initData = WebApp.initData//     if (initData) {//         try {//             const response = await fetch('/api/auth', {//                 method: 'POST',//                 headers: {//                     'Content-Type': 'application/json',//                 },//                 body: JSON.stringify({ initData }),//             })//             if (response.ok) {//                 setIsAuthenticated(true)//                 router.refresh()//             } else {//                 console.error('Authentication failed')//                 setIsAuthenticated(false)//             }//         } catch (error) {//             console.error('Error during authentication:', error)//             setIsAuthenticated(false)//         }//     }// }return (
        <divclassName="flex flex-col items-center space-y-4 p-8"><p>Welcome to the Telegram Mini App!</p><button
                onClick={() => router.push('/protected')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Go to Protected Page
            </button></div>
    )
}
