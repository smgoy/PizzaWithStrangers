desc "This task is called by the Heroku scheduler add-on"
task :reseed_database => :environment do
    puts "Resetting database..."
    Rake::Task['db:reset'].invoke
    puts "done."
end
