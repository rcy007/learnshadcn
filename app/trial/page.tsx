import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomizedComponents() {
  return (
    <div className="p-8 space-y-6 theme-ocean">
      {/* Add spacing and width utilities */}
      <Button className="w-full py-3">
        Full Width Button
      </Button>

      {/* Add border and shadow customizations */}
      <Card className="border-dashed border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-purple-600">
            Custom Styled Card
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-gradient-to-r from-blue-50 to-purple-50">
          <p>This card has custom border, shadow, and background styling.</p>
        </CardContent>
      </Card>
      <Card className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <CardContent className="p-4 md:p-6 lg:p-8">
          <Button className="w-full sm:w-auto sm:px-8">
            Responsive Button
          </Button>
        </CardContent>
      </Card>
      <Button className="
  data-[state=open]:bg-green-500 
  data-[state=closed]:bg-gray-500
  hover:scale-105 
  active:scale-95 
  disabled:opacity-50 
  disabled:cursor-not-allowed
">
        State-Aware Button
      </Button>
    </div>

  )
}