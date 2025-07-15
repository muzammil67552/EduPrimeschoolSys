
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      name: "Montessori",
      description: "Child-centered educational approach with hands-on learning and self-directed activities.",
      ageRange: "3-6 years",
      duration: "Full Day",
      students: "15-20",
      highlights: ["Sensory Learning", "Independence", "Creative Expression"],
      color: "bg-pink-100 text-pink-800"
    },
    {
      name: "Kindergarten",
      description: "Foundation building with play-based learning and social skill development.",
      ageRange: "5-6 years",
      duration: "Full Day",
      students: "20-25",
      highlights: ["Phonics", "Number Concepts", "Social Skills"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Grade 1",
      description: "Introduction to formal education with reading, writing, and basic mathematics.",
      ageRange: "6-7 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Reading Fluency", "Basic Math", "Science Discovery"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Grade 2",
      description: "Building upon fundamentals with enhanced reading comprehension and problem-solving.",
      ageRange: "7-8 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Reading Comprehension", "Addition & Subtraction", "Creative Writing"],
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Grade 3",
      description: "Developing critical thinking skills with more complex subjects and projects.",
      ageRange: "8-9 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Multiplication", "Research Skills", "Science Experiments"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "Grade 4",
      description: "Advanced learning with emphasis on analytical thinking and subject specialization.",
      ageRange: "9-10 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Division", "Essay Writing", "Geography"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      name: "Grade 5",
      description: "Preparing for middle school with advanced concepts and independent study skills.",
      ageRange: "10-11 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Fractions & Decimals", "Research Projects", "History"],
      color: "bg-red-100 text-red-800"
    },
    {
      name: "Grade 6",
      description: "Transition to middle school with subject-specific teachers and deeper learning.",
      ageRange: "11-12 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Algebra Basics", "Literature Analysis", "Life Science"],
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      name: "Grade 7",
      description: "Building confidence with advanced mathematics, sciences, and critical thinking.",
      ageRange: "12-13 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Pre-Algebra", "Physical Science", "World History"],
      color: "bg-teal-100 text-teal-800"
    },
    {
      name: "Grade 8",
      description: "Preparing for high school with advanced coursework and college preparation.",
      ageRange: "13-14 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Algebra I", "Biology", "Literature"],
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      name: "Grade 9",
      description: "High school foundation with comprehensive subjects and career exploration.",
      ageRange: "14-15 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Geometry", "Chemistry", "World Literature"],
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      name: "Grade 10",
      description: "Advanced high school curriculum with specialization options and exam preparation.",
      ageRange: "15-16 years",
      duration: "Full Day",
      students: "25-30",
      highlights: ["Algebra II", "Physics", "Advanced Writing"],
      color: "bg-violet-100 text-violet-800"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Classes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive educational programs designed to nurture growth 
            and learning from early childhood through high school.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {classItem.name}
                  </CardTitle>
                  <Badge className={classItem.color}>
                    {classItem.ageRange}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{classItem.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-600" />
                    <span>{classItem.students}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {classItem.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-600">
                Our curriculum is designed to meet national standards while fostering creativity and critical thinking.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Small Class Sizes
              </h3>
              <p className="text-gray-600">
                We maintain optimal student-to-teacher ratios to ensure personalized attention for every child.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Flexible Schedule
              </h3>
              <p className="text-gray-600">
                We offer full-day programs with extended care options to accommodate working families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
