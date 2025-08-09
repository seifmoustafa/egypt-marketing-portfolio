"use client"

import { useEffect, useState } from "react"
import {
  Save,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  LayoutGrid,
  Palette,
  PenTool,
  Search,
  Settings2,
  Sparkles,
  FileText,
  ImageIcon,
  Globe,
  BarChart3,
  Users,
  Bell,
  Download,
  Upload,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { sections as siteSections, contentSections } from "@/lib/mockdata"
import { useToast } from "@/hooks/use-toast"

type Item = { title: string; description: string; icon: string }

export default function ControlPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [selectedSection, setSelectedSection] = useState(siteSections[0]?.id ?? "intro")
  const [sectionData, setSectionData] = useState({
    title: "",
    content: "",
    isVisible: true,
    items: [] as Item[],
  })
  const [saveStatus, setSaveStatus] = useState("")
  const [hasChanges, setHasChanges] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Hydrate from mock content for a better editing baseline
    const initial = (contentSections as any)[selectedSection] || {}
    setSectionData((prev) => ({
      ...prev,
      title: initial.title || prev.title || "",
      content: initial.content || initial.subtitle || prev.content || "",
    }))
  }, [selectedSection])

  useEffect(() => {
    setHasChanges(true)
  }, [sectionData.title, sectionData.content, sectionData.items, sectionData.isVisible])

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true)
      toast({ title: "تم تسجيل الدخول", description: "مرحبًا بك في لوحة التحكم." })
    } else {
      toast({ title: "كلمة مرور خاطئة", description: "الرجاء المحاولة مرة أخرى.", variant: "destructive" })
    }
  }

  const handleSave = () => {
    // Placeholder until backend integration
    setSaveStatus("تم حفظ التغييرات بنجاح")
    setHasChanges(false)
    toast({ title: "تم الحفظ", description: "تم حفظ جميع التغييرات." })
    setTimeout(() => setSaveStatus(""), 2500)
  }

  const addNewItem = () => {
    setSectionData((prev) => ({
      ...prev,
      items: [...prev.items, { title: "", description: "", icon: "" }],
    }))
  }

  const removeItem = (index: number) => {
    setSectionData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }))
  }

  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4"
        dir="rtl"
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-xl">
            <CardHeader className="text-center pb-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 w-fit shadow-lg mb-4"
              >
                <Image src="/logo-transparent.png" alt="شعار الشركة" width={120} height={80} className="h-16 w-auto" />
              </motion.div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                لوحة التحكم
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                يرجى إدخال كلمة المرور للوصول إلى نظام الإدارة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  كلمة المرور
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  className="h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                />
              </div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleLogin}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    دخول
                  </span>
                </Button>
              </motion.div>
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">شركة مصر للتحليل والدراسات التسويقية</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" dir="rtl">
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-3 shadow-md"
              >
                <Image src="/logo-transparent.png" alt="شعار الشركة" width={60} height={40} className="h-12 w-auto" />
              </motion.div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  لوحة التحكم
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>شركة مصر للتحليل والدراسات التسويقية</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {hasChanges && (
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                  <RefreshCw className="w-3 h-3 ml-1" />
                  تغييرات غير محفوظة
                </Badge>
              )}
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Bell className="w-4 h-4" />
                الإشعارات
              </Button>
              <Button variant="outline" onClick={() => setIsAuthenticated(false)} className="gap-2">
                تسجيل الخروج
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Success Alert */}
        <AnimatePresence>
          {saveStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6"
            >
              <Alert className="bg-green-50 border-green-200 text-green-800">
                <Sparkles className="w-4 h-4" />
                <AlertDescription className="font-medium">{saveStatus}</AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Enhanced Sidebar */}
          <motion.aside
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Sections List */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-blue-600" />
                  أقسام الموقع
                </CardTitle>
                <CardDescription>اختر القسم للتحرير والتعديل</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-96 overflow-y-auto">
                  {siteSections.map((s, index) => (
                    <motion.button
                      key={s.id}
                      whileHover={{ x: -4 }}
                      onClick={() => setSelectedSection(s.id)}
                      className={`w-full text-right p-4 transition-all duration-200 border-r-4 ${
                        selectedSection === s.id
                          ? "bg-blue-50 border-blue-600 text-blue-700"
                          : "hover:bg-gray-50 border-transparent text-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-right">
                          <div className="font-semibold">{s.title}</div>
                          <div className="text-xs text-gray-500 mt-1">القسم {index + 1}</div>
                        </div>
                        <Badge variant={selectedSection === s.id ? "default" : "secondary"} className="text-xs">
                          {s.type}
                        </Badge>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings2 className="w-5 h-5 text-purple-600" />
                  إجراءات سريعة
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="gap-2 bg-white hover:bg-blue-50">
                  <Eye className="w-4 h-4" />
                  معاينة
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-white hover:bg-purple-50">
                  <Palette className="w-4 h-4" />
                  ألوان
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-white hover:bg-green-50">
                  <BarChart3 className="w-4 h-4" />
                  إحصائيات
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-white hover:bg-orange-50">
                  <Download className="w-4 h-4" />
                  تصدير
                </Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-1">إجمالي الزوار</h3>
                <p className="text-2xl font-bold text-blue-600">12,543</p>
                <p className="text-sm text-gray-600 mt-1">هذا الشهر</p>
              </CardContent>
            </Card>
          </motion.aside>

          {/* Enhanced Main Editor */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <PenTool className="w-6 h-6 text-blue-600" />
                      تحرير قسم: {siteSections.find((s) => s.id === selectedSection)?.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      نوع القسم:{" "}
                      <Badge variant="outline">{siteSections.find((s) => s.id === selectedSection)?.type}</Badge>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="visibility" className="text-sm font-medium">
                        مرئي للزوار
                      </Label>
                      <Switch
                        id="visibility"
                        checked={sectionData.isVisible}
                        onCheckedChange={(checked) => setSectionData((p) => ({ ...p, isVisible: checked }))}
                      />
                      {sectionData.isVisible ? (
                        <Eye className="w-5 h-5 text-green-600" />
                      ) : (
                        <EyeOff className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <Tabs defaultValue="content" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100">
                    <TabsTrigger value="content" className="gap-2">
                      <FileText className="w-4 h-4" />
                      المحتوى
                    </TabsTrigger>
                    <TabsTrigger value="design" className="gap-2">
                      <Palette className="w-4 h-4" />
                      التصميم
                    </TabsTrigger>
                    <TabsTrigger value="seo" className="gap-2">
                      <Search className="w-4 h-4" />
                      SEO
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-8">
                    {/* Basic Content Fields */}
                    <div className="grid md:grid-cols-1 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="title" className="text-base font-semibold text-gray-700">
                          العنوان الرئيسي
                        </Label>
                        <Input
                          id="title"
                          value={sectionData.title}
                          onChange={(e) => setSectionData((p) => ({ ...p, title: e.target.value }))}
                          placeholder="أدخل العنوان الرئيسي للقسم"
                          className="h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="content" className="text-base font-semibold text-gray-700">
                          المحتوى الأساسي
                        </Label>
                        <Textarea
                          id="content"
                          value={sectionData.content}
                          onChange={(e) => setSectionData((p) => ({ ...p, content: e.target.value }))}
                          placeholder="أدخل محتوى القسم والوصف التفصيلي"
                          rows={8}
                          className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base leading-relaxed"
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Dynamic Items Section */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-lg font-semibold text-gray-800">العناصر الفرعية</Label>
                          <p className="text-sm text-gray-600 mt-1">إضافة وإدارة العناصر الفرعية للقسم</p>
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button onClick={addNewItem} className="gap-2 bg-blue-600 hover:bg-blue-700">
                            <Plus className="w-4 h-4" />
                            إضافة عنصر جديد
                          </Button>
                        </motion.div>
                      </div>

                      <div className="space-y-4">
                        <AnimatePresence>
                          {sectionData.items.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Card className="bg-gray-50 border border-gray-200">
                                <CardHeader className="pb-3">
                                  <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">العنصر رقم {index + 1}</CardTitle>
                                    <Button
                                      onClick={() => removeItem(index)}
                                      size="sm"
                                      variant="destructive"
                                      className="gap-2"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                      حذف
                                    </Button>
                                  </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                  <div className="grid md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                      <Label className="text-sm font-medium text-gray-700">الأيقونة</Label>
                                      <Input
                                        value={item.icon}
                                        onChange={(e) => {
                                          const items = [...sectionData.items]
                                          items[index].icon = e.target.value
                                          setSectionData((p) => ({ ...p, items }))
                                        }}
                                        placeholder="اسم الأيقونة أو الرمز"
                                        className="bg-white border-gray-200 focus:border-blue-500"
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label className="text-sm font-medium text-gray-700">العنوان</Label>
                                      <Input
                                        value={item.title}
                                        onChange={(e) => {
                                          const items = [...sectionData.items]
                                          items[index].title = e.target.value
                                          setSectionData((p) => ({ ...p, items }))
                                        }}
                                        placeholder="عنوان العنصر"
                                        className="bg-white border-gray-200 focus:border-blue-500"
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label className="text-sm font-medium text-gray-700">الوصف</Label>
                                      <Input
                                        value={item.description}
                                        onChange={(e) => {
                                          const items = [...sectionData.items]
                                          items[index].description = e.target.value
                                          setSectionData((p) => ({ ...p, items }))
                                        }}
                                        placeholder="وصف مختصر للعنصر"
                                        className="bg-white border-gray-200 focus:border-blue-500"
                                      />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        {sectionData.items.length === 0 && (
                          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600">لا توجد عناصر فرعية بعد</p>
                            <p className="text-sm text-gray-500 mt-1">اضغط على "إضافة عنصر جديد" لبدء الإضافة</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="design" className="space-y-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">لون الخلفية</Label>
                        <div className="flex gap-2">
                          <Input type="color" defaultValue="#ffffff" className="w-16 h-12 p-1 bg-white" />
                          <Input defaultValue="#ffffff" className="flex-1 bg-white border-gray-200" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">لون النص</Label>
                        <div className="flex gap-2">
                          <Input type="color" defaultValue="#000000" className="w-16 h-12 p-1 bg-white" />
                          <Input defaultValue="#000000" className="flex-1 bg-white border-gray-200" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">حجم الخط</Label>
                        <Input type="number" defaultValue={16} className="bg-white border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">المسافات</Label>
                        <Input type="number" defaultValue={16} className="bg-white border-gray-200" />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="seo" className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-base font-semibold text-gray-700">عنوان SEO</Label>
                        <Input
                          placeholder="عنوان محسن لمحركات البحث"
                          className="bg-white border-gray-200 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-base font-semibold text-gray-700">وصف SEO</Label>
                        <Textarea
                          placeholder="وصف محسن لمحركات البحث (160 حرف كحد أقصى)"
                          rows={4}
                          className="bg-white border-gray-200 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-base font-semibold text-gray-700">الكلمات المفتاحية</Label>
                        <Input
                          placeholder="كلمات مفتاحية مفصولة بفواصل"
                          className="bg-white border-gray-200 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <Separator className="my-8" />
                <div className="flex flex-col sm:flex-row justify-end gap-4">
                  <Button variant="outline" className="gap-2 bg-white">
                    <Eye className="w-4 h-4" />
                    معاينة التغييرات
                  </Button>
                  <Button variant="outline" className="gap-2 bg-white">
                    <Upload className="w-4 h-4" />
                    رفع صورة
                  </Button>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={handleSave} className="gap-2 bg-green-600 hover:bg-green-700 px-8">
                      <Save className="w-4 h-4" />
                      حفظ جميع التغييرات
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Live Preview Card */}
            <Card className="mt-8 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  معاينة سريعة
                </CardTitle>
                <CardDescription>طريقة عرض المحتوى الحالي في الموقع</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="rounded-2xl border-2 border-gray-200 p-8 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {sectionData.title || (contentSections as any)[selectedSection]?.title || "عنوان القسم"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {sectionData.content ||
                      (contentSections as any)[selectedSection]?.content ||
                      (contentSections as any)[selectedSection]?.subtitle ||
                      "محتوى القسم سيظهر هنا..."}
                  </p>
                  {sectionData.items.length > 0 && (
                    <div className="mt-6 grid gap-3">
                      {sectionData.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm">{item.icon || "★"}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{item.title || "عنوان العنصر"}</h4>
                            <p className="text-sm text-gray-600">{item.description || "وصف العنصر"}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
