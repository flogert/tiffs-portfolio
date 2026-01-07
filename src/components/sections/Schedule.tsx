import { useState, useMemo } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { schedule } from "@/data/content";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Find schedule item for selected date
  const selectedSchedule = schedule.find(
    (item) => 
      date && 
      item.date.getDate() === date.getDate() && 
      item.date.getMonth() === date.getMonth() && 
      item.date.getFullYear() === date.getFullYear()
  );

  // Get upcoming schedule items (next 10)
  const upcomingSchedule = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return schedule
      .filter(item => item.date >= now && item.status !== "unavailable")
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 10);
  }, []);

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Custom Day Content Component for desktop
  const CustomDayContent = (props: any) => {
    const { date: dayDate, activeModifiers } = props;
    const isSelected = activeModifiers?.selected;

    const scheduleItem = schedule.find(
      (item) => 
        item.date.getDate() === dayDate.getDate() && 
        item.date.getMonth() === dayDate.getMonth() && 
        item.date.getFullYear() === dayDate.getFullYear()
    );

    const isUnavailable = scheduleItem?.status === "unavailable";

    return (
      <div className="flex flex-col items-center justify-start h-full w-full py-1 min-h-[3.5rem] md:min-h-[4rem]">
        <span className="text-sm font-medium">{dayDate.getDate()}</span>
        {scheduleItem && (
          <>
            <span className={`text-[0.5rem] md:text-[0.6rem] leading-tight font-bold mt-0.5 text-center px-0.5 line-clamp-1 break-words w-full ${
              isUnavailable 
                ? "text-red-500" 
                : isSelected 
                  ? "text-primary-foreground" 
                  : "text-primary"
            }`}>
              {scheduleItem.location}
            </span>
            {scheduleItem.time && (
              <span className={`text-[0.45rem] md:text-[0.55rem] leading-tight mt-0.5 text-center px-0.5 w-full ${
                isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {scheduleItem.time}
              </span>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section id="schedule" className="py-10 md:py-24 bg-warm-beige/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-cozy font-bold text-primary mb-2 md:mb-4 tracking-wide">
              Schedule & Event Bookings
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">Find us at Lititz Library</p>
          </div>
        </AnimatedSection>

        {/* Mobile: Simple List View */}
        <div className="md:hidden">
          <AnimatedSection animation="fade-up">
            <Card className="border-none shadow-lg bg-background/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  Upcoming Schedule
                </h3>
                <div className="space-y-3">
                  {upcomingSchedule.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-warm-beige/50 rounded-xl"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-primary text-sm">
                          {formatDate(item.date)}
                        </p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Wednesdays 4-8pm • Thursdays 9am-2pm
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Desktop: Full Calendar View */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <Card className="border-none shadow-xl bg-background/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-xl border-none w-full"
                  classNames={{
                    month: "space-y-4 w-full",
                    table: "w-full border-separate border-spacing-y-2",
                    head_row: "flex w-full",
                    head_cell: "text-muted-foreground rounded-xl w-full font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "h-auto w-full text-center text-sm p-1 relative focus-within:relative focus-within:z-20",
                    day: "h-auto w-full p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md text-base focus:outline-none",
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-xl scale-105 shadow-lg",
                    day_today: "bg-accent/50 text-accent-foreground",
                  }}
                  components={{
                    DayContent: CustomDayContent
                  }}
                />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
