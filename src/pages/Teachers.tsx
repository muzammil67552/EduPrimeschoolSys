
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, BookOpen } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal & Mathematics Teacher",
      subjects: ["Mathematics", "Leadership"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      bio: "With over 15 years of experience in education, Dr. Johnson leads our academy with passion and dedication to student success.",
      qualifications: ["PhD in Education", "M.Ed Mathematics", "B.Sc Mathematics"],
      email: "sarah.johnson@eduprime.edu",
      phone: "(555) 123-4567"
    },
    {
      name: "Ms. Emily Chen",
      position: "English & Literature Teacher",
      subjects: ["English", "Literature", "Creative Writing"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      bio: "Ms. Chen brings creativity and enthusiasm to language learning, inspiring students to express themselves through writing.",
      qualifications: ["M.A. English Literature", "B.A. English", "TESOL Certification"],
      email: "emily.chen@eduprime.edu",
      phone: "(555) 123-4568"
    },
    {
      name: "Mr. David Rodriguez",
      position: "Science Teacher",
      subjects: ["Physics", "Chemistry", "Biology"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      bio: "Mr. Rodriguez makes science exciting through hands-on experiments and real-world applications of scientific principles.",
      qualifications: ["M.Sc. Physics", "B.Sc. Chemistry", "Teaching License"],
      email: "david.rodriguez@eduprime.edu",
      phone: "(555) 123-4569"
    },
    {
      name: "Mrs. Lisa Thompson",
      position: "Montessori Director",
      subjects: ["Montessori Method", "Early Childhood"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      bio: "Mrs. Thompson is a certified Montessori educator with 12 years of experience in early childhood development.",
      qualifications: ["AMI Montessori Diploma", "B.A. Child Development", "Early Childhood License"],
      email: "lisa.thompson@eduprime.edu",
      phone: "(555) 123-4570"
    },
    {
      name: "Mr. James Wilson",
      position: "History & Social Studies Teacher",
      subjects: ["History", "Geography", "Social Studies"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      bio: "Mr. Wilson brings history to life with engaging storytelling and interactive learning experiences.",
      qualifications: ["M.A. History", "B.A. Social Studies", "Teaching Certificate"],
      email: "james.wilson@eduprime.edu",
      phone: "(555) 123-4571"
    },
    {
      name: "Ms. Maria Garcia",
      position: "Art & Music Teacher",
      subjects: ["Visual Arts", "Music", "Drama"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      bio: "Ms. Garcia nurtures creativity and artistic expression, helping students discover their unique talents.",
      qualifications: ["M.F.A. Visual Arts", "B.A. Music", "Arts Education Certificate"],
      email: "maria.garcia@eduprime.edu",
      phone: "(555) 123-4572"
    },
    {
      name: "Mr. Robert Kim",
      position: "Physical Education Teacher",
      subjects: ["Physical Education", "Sports", "Health"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      bio: "Mr. Kim promotes physical fitness and sportsmanship while teaching valuable life skills through athletics.",
      qualifications: ["M.S. Kinesiology", "B.S. Physical Education", "Coaching License"],
      email: "robert.kim@eduprime.edu",
      phone: "(555) 123-4573"
    },
    {
      name: "Dr. Amanda Foster",
      position: "Special Education Coordinator",
      subjects: ["Special Education", "Learning Support"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      bio: "Dr. Foster ensures every student receives the support they need to succeed academically and personally.",
      qualifications: ["Ed.D. Special Education", "M.Ed. Learning Disabilities", "Special Education License"],
      email: "amanda.foster@eduprime.edu",
      phone: "(555) 123-4574"
    },
    {
      name: "Ms. Jennifer Lee",
      position: "Technology Coordinator",
      subjects: ["Computer Science", "Digital Literacy"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      bio: "Ms. Lee integrates technology into learning, preparing students for the digital future.",
      qualifications: ["M.S. Computer Science", "B.S. Information Technology", "EdTech Certificate"],
      email: "jennifer.lee@eduprime.edu",
      phone: "(555) 123-4575"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Teachers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated faculty brings expertise, passion, and commitment to nurturing 
            every student's academic and personal growth.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="relative mx-auto">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 rounded-full">
                    <BookOpen className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{teacher.position}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">About:</h4>
                  <p className="text-sm text-gray-600">{teacher.bio}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Qualifications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {teacher.qualifications.map((qual, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span>{teacher.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span>{teacher.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Teaching Team</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate educators who want to make a difference 
            in students' lives. Join our community of dedicated teachers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
              View Open Positions
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
