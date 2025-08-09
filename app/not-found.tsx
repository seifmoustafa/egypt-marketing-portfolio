import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Home, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-lg shadow-2xl border-0">
        <CardContent className="p-12 text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo-transparent.png"
              alt="شعار شركة مصر للتحليل والدراسات التسويقية"
              width={120}
              height={80}
              className="mx-auto h-16 w-auto"
            />
          </div>
          
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
            <Search className="w-16 h-16 text-gray-400 mx-auto" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            الصفحة غير موجودة
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها. 
            ربما تم نقلها أو حذفها أو أن الرابط غير صحيح.
          </p>
          
          <div className="space-y-4">
            <Link href="/">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                <Home className="w-4 h-4 ml-2" />
                العودة للصفحة الرئيسية
              </Button>
            </Link>
            
            <Link href="/#contact">
              <Button 
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                تواصل معنا
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              شركة مصر للتحليل والدراسات التسويقية
            </p>
            <p className="text-xs text-gray-400 mt-1">
              تقديم مفهوم جديد للاستثمار في التسويق
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
