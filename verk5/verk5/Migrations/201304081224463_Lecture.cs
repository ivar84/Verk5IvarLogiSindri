namespace verk5.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Lecture : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Lectures", "Title", c => c.String());
            AddColumn("dbo.Lectures", "LectureOwner", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Lectures", "LectureOwner");
            DropColumn("dbo.Lectures", "Title");
        }
    }
}
