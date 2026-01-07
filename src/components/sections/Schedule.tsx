import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { schedule } from "@/data/content";

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

  // Custom Day Content Component
  const CustomDayContent = (props: any) => {
    const { date: dayDate, activeModifiers } = props;
    const isSelected = activeModifiers?.selected;

    const scheduleItem = schedule.find(
      (item) => 
        item.date.getDate() === dayDate.getDate() && 
        item.date.getMonth() === dayDate.getMonth() && 
        item.date.getFullYear() === dayDate.getFullYear()
    );

    return (
      <div className="flex flex-col items-center justify-start h-full w-full py-1 min-h-[3.5rem] md:min-h-[4rem]">
        <span className="text-sm font-medium">{dayDate.getDate()}</span>
        {scheduleItem && (
          <>
            <span className={`text-[0.55rem] md:text-[0.6rem] leading-tight font-bold mt-1 text-center px-0.5 line-clamp-1 break-words w-full ${isSelected ? "text-primary-foreground" : "text-primary"}`}>
              {scheduleItem.location}
            </span>
            <span className={`text-[0.55rem] md:text-[0.6rem] leading-tight mt-0.5 text-center px-0.5 w-full ${isSelected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {scheduleItem.time}
            </span>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="schedule" className="py-12 md:py-24 bg-warm-beige/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cozy font-bold text-primary mb-4 tracking-wide">
              Schedule & Event Bookings
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Calendar View */}
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
