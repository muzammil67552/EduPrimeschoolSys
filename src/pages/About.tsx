
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Academic Excellence",
      description: "We strive for the highest standards in education, ensuring every student reaches their full potential."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Compassionate Care",
      description: "We nurture each student with love, understanding, and individualized attention."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Focus",
      description: "We build strong partnerships with families and the community to support student success."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Character Development",
      description: "We emphasize integrity, respect, and responsibility in all aspects of learning."
    }
  ];

  const milestones = [
    { year: "2008", event: "EduPrime Academy founded with 50 students" },
    { year: "2012", event: "Expanded to include middle school grades" },
    { year: "2015", event: "Opened new science and technology center" },
    { year: "2018", event: "Achieved national accreditation" },
    { year: "2020", event: "Implemented innovative online learning platform" },
    { year: "2022", event: "Opened new arts and athletics complex" },
    { year: "2024", event: "Celebrating 500+ successful graduates" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About EduPrime Academy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our story, mission, and commitment to providing exceptional 
            education that prepares students for success in life.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-bold text-gray-900">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To provide a nurturing, inclusive, and academically rigorous environment 
                where every student can discover their unique talents, develop critical 
                thinking skills, and become compassionate global citizens.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Eye className="h-6 w-6 text-green-600" />
                <CardTitle className="text-xl font-bold text-gray-900">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To be the leading educational institution that inspires lifelong learning, 
                innovation, and excellence, preparing students to thrive in an ever-changing 
                world while making positive contributions to society.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-red-600" />
                <CardTitle className="text-xl font-bold text-gray-900">Our Philosophy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We believe that education should be holistic, engaging, and personalized. 
                Every child learns differently, and we celebrate these differences while 
                providing the support and challenges each student needs to succeed.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    EduPrime Academy was founded in 2008 by a group of passionate educators 
                    who believed that every child deserves access to quality education. 
                    Starting with just 50 students in a small building, we have grown into 
                    a thriving educational community.
                  </p>
                  <p className="text-gray-600">
                    Our founders envisioned a school where traditional academic excellence 
                    would be combined with innovative teaching methods, creating an environment 
                    where students could flourish both academically and personally.
                  </p>
                  <p className="text-gray-600">
                    Today, we proudly serve over 500 students from Montessori through 10th grade, 
                    with a dedicated team of more than 50 educators and staff members who share 
                    our commitment to educational excellence.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                    alt="School building"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="shadow-md">
                      <CardContent className="p-4">
                        <Badge className="mb-2 bg-blue-600">{milestone.year}</Badge>
                        <p className="text-sm text-gray-600">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accreditation & Recognition */}
        <div className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Accreditation & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Accreditations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      National Association of Independent Schools (NAIS)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      American Montessori Society (AMS)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      International Baccalaureate Organization (IBO)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      State Department of Education
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Excellence in Education Award 2023
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Top Private School - Regional Award 2022
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Innovation in Teaching Award 2021
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Community Impact Award 2020
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop"
                  alt="Principal"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-sm text-blue-600 mb-2">Principal</p>
                <p className="text-xs text-gray-600">
                  Leading EduPrime Academy with 15+ years of educational leadership experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop"
                  alt="Academic Director"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">Mr. David Rodriguez</h3>
                <p className="text-sm text-blue-600 mb-2">Academic Director</p>
                <p className="text-xs text-gray-600">
                  Overseeing curriculum development and academic excellence across all grades.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop"
                  alt="Student Services Director"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">Ms. Lisa Thompson</h3>
                <p className="text-sm text-blue-600 mb-2">Student Services Director</p>
                <p className="text-xs text-gray-600">
                  Ensuring comprehensive support services and student well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
