
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedFooter from "@/components/AnimatedFooter";

interface FeedbackItem {
  name: string;
  category: string;
  rating: number;
  comment: string;
  date: string;
}

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    rating: 0,
    comment: ""
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submittedFeedback, setSubmittedFeedback] = useState<FeedbackItem[]>([]);
  const { toast } = useToast();

  const existingFeedback = [
    {
      name: "Sarah Johnson",
      category: "Parent",
      rating: 5,
      comment: "Exceptional school! My daughter has flourished here. The teachers are caring and dedicated.",
      date: "2 days ago"
    },
    {
      name: "Michael Chen",
      category: "Parent",
      rating: 5,
      comment: "The Montessori program is outstanding. My son loves going to school every day.",
      date: "1 week ago"
    },
    {
      name: "Emma Davis",
      category: "Student",
      rating: 4,
      comment: "Great school with amazing teachers. The science lab is my favorite place!",
      date: "1 week ago"
    },
    {
      name: "Robert Wilson",
      category: "Parent",
      rating: 5,
      comment: "Highly recommend EduPrime Academy. The staff genuinely cares about each student's success.",
      date: "2 weeks ago"
    },
    {
      name: "Lisa Martinez",
      category: "Alumni",
      rating: 5,
      comment: "This school prepared me well for high school and beyond. Forever grateful!",
      date: "3 weeks ago"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.category || !formData.rating || !formData.comment) {
      toast({
        title: "Error",
        description: "Please fill in all fields and provide a rating.",
        variant: "destructive"
      });
      return;
    }

    // Add new feedback to the list
    const newFeedback: FeedbackItem = {
      name: formData.name,
      category: formData.category,
      rating: formData.rating,
      comment: formData.comment,
      date: "Just now"
    };

    setSubmittedFeedback(prev => [newFeedback, ...prev]);

    console.log("Feedback submitted:", formData);
    toast({
      title: "Thank you for your feedback!",
      description: "Your feedback has been submitted successfully and is now visible below.",
    });
    
    setFormData({
      name: "",
      email: "",
      category: "",
      rating: 0,
      comment: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starIndex = index + 1;
      const isFilled = interactive 
        ? (hoveredRating > 0 ? starIndex <= hoveredRating : starIndex <= formData.rating)
        : starIndex <= rating;
      
      return (
        <Star
          key={index}
          className={`h-6 w-6 ${
            isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300'
          } ${interactive ? 'cursor-pointer transition-colors' : ''}`}
          onClick={interactive ? () => handleRatingClick(starIndex) : undefined}
          onMouseEnter={interactive ? () => setHoveredRating(starIndex) : undefined}
          onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
        />
      );
    });
  };

  // Combine submitted feedback with existing feedback
  const allFeedback = [...submittedFeedback, ...existingFeedback];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Feedback & Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We value your feedback! Share your experience with EduPrime Academy 
            and help us continue to improve our educational services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Share Your Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Parent">Parent</option>
                    <option value="Student">Student</option>
                    <option value="Alumni">Alumni</option>
                    <option value="Staff">Staff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center space-x-1">
                    {renderStars(formData.rating, true)}
                    <span className="ml-2 text-sm text-gray-600">
                      {formData.rating > 0 ? `${formData.rating} star${formData.rating > 1 ? 's' : ''}` : 'No rating'}
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Comment *
                  </label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Share your experience with us..."
                    rows={5}
                    className="w-full"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Reviews</h2>
            
            {allFeedback.map((feedback, index) => (
              <Card key={index} className={`shadow-md transition-all duration-300 ${
                index < submittedFeedback.length ? 'animate-fadeInUp border-blue-200' : ''
              }`}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{feedback.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {feedback.category}
                          </Badge>
                          {index < submittedFeedback.length && (
                            <Badge className="text-xs bg-green-100 text-green-800">
                              New
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {renderStars(feedback.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{feedback.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{feedback.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Our Feedback Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-600">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                  <div className="flex justify-center">
                    {renderStars(5)}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-600">{250 + submittedFeedback.length}+</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Recommend Us</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Animated Footer */}
      <AnimatedFooter />
    </div>
  );
};

export default Feedback;
