hourspernight = input("How many hours per night do you sleep?")
hoursperweek = int(hourspernight) *7
print ("You sleep",hoursperweek, "hours per week")

hourspermonth = float(hoursperweek) *4.35
print ("You sleep",hourspermonth,"hours per month")

dayspermonth = float(hourspermonth) /24
print ("This equates to",dayspermonth,"days per month")

hourspernight = input("How many hours per night do you sleep?")
hoursperweek = int(hourspernight) *7
hourspermonth = round(hourspermonth)
print ("You sleep",hoursperweek, "hours per week")
hourspermonth = float(hoursperweek) *4.35
print ("\nYou sleep",hourspermonth,"hours per month")