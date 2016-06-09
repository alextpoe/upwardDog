
guest = User.create({ username: "Guest", password: "password"})

project_list = [
  ["My Tasks", "Unorganized Tasks"],
  ["Day Siezing", "Tasks to Sieze the Day"],
  ["Day Attacking", "Tasks to Attack the Day"],
  ["Night Siezing", "Tasks to Sieze the Night"],
  ["Carpe Dieming", "Tasks to turn a Dime into a Dollar"],
  ["Realizing Full Potential", "Tasks to Realize"]
]

project_list.each do |title, description|
  guest.projects.create!( title: title, description: description)
end


task_list0 = [
  ["Check the fridge for food supply", guest.id],
  ["See if Joe wants to hang", guest.id],
  ["Check out the new Game of Thrones", guest.id],
  ["Try reading", guest.id],
  ["Call mom", guest.id],
  ["Laundry", guest.id]
]

task_list0.each do |title, assignee_id|
  guest.projects[0].tasks.create!( title: title, assignee_id: assignee_id)
end

task_list1 = [
  ["Believe", guest.id],
  ["Achieve", guest.id],
  ["Compete", guest.id],
  ["Willpower", guest.id],
  ["Pride", guest.id],
  ["Win", guest.id],
  ["Success", guest.id],
  ["Conquer", guest.id],
  ["Dominate", guest.id],
  ["Destroy", guest.id]
]

task_list1.each do |title, assignee_id|
  guest.projects[1].tasks.create!( title: title, assignee_id: assignee_id)
end

task_list2 = [
  ["Fervently Believe", guest.id],
  ["Fervently Achieve", guest.id],
  ["Fervently Compete", guest.id],
  ["Fervently Willpower", guest.id],
  ["Fervently Pride", guest.id],
  ["Fervently Win", guest.id],
  ["Fervently Success", guest.id],
  ["Fervently Conquer", guest.id],
  ["Fervently Dominate", guest.id],
  ["Fervently Destroy", guest.id]
]

task_list2.each do |title, assignee_id|
  guest.projects[2].tasks.create!( title: title, assignee_id: assignee_id)
end

task_list3 = [
  ["Continue achieving from day", guest.id],
  ["Excel in the night", guest.id],
  ["Make sure you don't screw up the pivot tables", guest.id],
  ["Try to capture the night", guest.id],
  ["Sleep a bit", guest.id],
]

task_list3.each do |title, assignee_id|
  guest.projects[3].tasks.create!( title: title, assignee_id: assignee_id)
end

task_list4 = [
  ["Salmon the strength to achieve", guest.id],
  ["Snapper up opportunitites that come your way", guest.id],
  ["Bust your bass", guest.id],
  ["Trout your strengths to all who will listen", guest.id],
  ["Disconnect with those close to you who harbor eel intentions", guest.id],
  ["Dig for goldfish for knowledge", guest.id],
  ["Cut to the chase, don't be koi", guest.id],
  ["Minnow your weaknesses", guest.id],
  ["Tuna into your inner seld", guest.id],
  ["Perch on the shoulder's of giants", guest.id],
  ["Ask for help, don't flounder", guest.id],
  ["Be positive, whistle walleye work", guest.id],
  ["Mahi Mahi", guest.id]
]

task_list4.each do |title, assignee_id|
  guest.projects[4].tasks.create!( title: title, assignee_id: assignee_id)
end

task_list5 = [
  ["Never gonna give you up", guest.id],
  ["Never gonna let you down", guest.id],
  ["Never gonna run around and desert you", guest.id],
  ["Never gonna make you cry", guest.id],
  ["Never gonna say goodbye", guest.id],
  ["Never gonna tell a lie and hurt you", guest.id]
]

task_list5.each do |title, assignee_id|
  guest.projects[5].tasks.create!( title: title, assignee_id: assignee_id)
end
