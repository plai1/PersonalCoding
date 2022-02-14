import csv
helloword = "hello"


#boolean
statement_one = False

statement_two = True

#function for grad reqs
def graduation_reqs(gpa, credits):
  if (gpa >= 2.0) and (credits >= 120):
    return "You meet the requirements to graduate!"
  if (gpa >= 2.0) and not (credits >= 120):
    return "You do not have enough credits to graduate."
  if not (gpa >= 2.0) and (credits >= 120):
    return "Your GPA is not high enough to graduate."
  if not (gpa >= 2.0) and not (credits >= 120):
    return "You do not meet either requirement to graduate!"

#lists testing
#list1 = range(10)
#list2 = range(11, 22)

#list3 = zip(list1,list2)

#print(helloword)
#print(graduation_reqs(4.2, 150))
#print(list(list3))

#with open('inputfile.csv', 'r') as inputfile:
    #likes = csv.DictReader(inputfile)
    #for i in likes:
        #print(i['Cool Fact'])
#close('inputfile.txt')

coolFacts = []
with open('inputfile.csv') as cool_csv:
  cool_csv_dict = csv.DictReader(cool_csv)
  for row in cool_csv_dict:
    print(row['Cool Birthday'])
    coolFacts.append(row['Cool Birthday'])

print(list(coolFacts))
